import {Component, createRef} from "react";
import ResultsTable from "./ResultsTable";
import {LineBreak} from "../LineBreak";
import Select from 'react-select'


class QueryDBForm extends Component {
    constructor(props) {
        super(props);
        this.queryInputRef = createRef()
        this.option = createRef()
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            queryResults: [],
            remoteDatabase: null,
        }
        this.options = JSON.parse(sessionStorage.getItem('allowedDatabases'))
    }

    handleChange = (option) => {
        this.setState({remoteDatabase: option})
    }

    submit(event) {
        event.preventDefault();
        const submittedData = {
            query: this.queryInputRef.current.value,
            short_name: this.state.remoteDatabase.value
        }
        const token = sessionStorage.getItem('token');
        const tokenStr = JSON.parse(token);
        fetch('http://127.0.0.1:80/api/v1/database-connections/query-specific-remote-db/',
            {
                method: "POST",
                body: JSON.stringify(submittedData),
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "token " + tokenStr
                }
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({queryResults: data})
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit} id="query-db-form">
                    <div>
                        <label htmlFor="query-panel">Query Panel:</label>
                        <br/>
                        <textarea rows="10" cols="50" id="query-panel" ref={this.queryInputRef}
                                  required/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="select-a-db">Select a DB:</label>
                        <br/>
                        <Select options={this.options} onChange={this.handleChange}/>
                    </div>
                    <br/>
                    <div>
                        <button className='btn'>Submit</button>
                    </div>
                </form>
                <br/>
                <LineBreak/>
                {
                    this.state.queryResults.length > 0 ?
                        <ResultsTable data={this.state.queryResults}/> : null
                }
            </div>
        );
    }
}

export default QueryDBForm;