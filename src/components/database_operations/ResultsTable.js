import {Component} from "react";
import Row from "./Row";


class ResultsTable extends Component {
    constructor(props) {
        super(props);
    }

    getHeader = function () {
        let keys = Object.keys(this.props.data[0]);
        return keys.map((key) => {
            return (
                <th>
                    {key.toUpperCase()}
                </th>
            );
        })
    }

    getRows = function () {
        let items = this.props.data;
        let keys = Object.keys(this.props.data[0]);
        return items.map((row) => {
            return (
                <tr>
                    <Row data={row} keys={keys}/>
                </tr>
            );
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        {this.getHeader()}
                    </tr>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ResultsTable;