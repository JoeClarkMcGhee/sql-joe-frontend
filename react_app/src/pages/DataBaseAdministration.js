import {LineBreak} from "../components/LineBreak";
import {useRef, useState} from "react";
import ConnectionStatus from "../components/database_operations/ConnectionStatus";
import CurrentConnectionConfig from "../components/database_operations/CurrentConnectionConfig";
import Select from 'react-select'

function DatabaseConnection(props) {
    return (
        props.dbNames.map((dbName) => {
            return (
                <div id={"db-connection-item"}>
                    <h3>Current Connection Config: {dbName.value}</h3>
                    <CurrentConnectionConfig dbName={dbName.value}/>
                    <h3>Connection Status </h3>
                    <ConnectionStatus dbName={dbName.value}/>
                    <LineBreak/>
                </div>
            )
        })
    )
}

function DataBaseAdministration() {
    const dbOptions = JSON.parse(sessionStorage.getItem('allowedDatabases'))
    const hostInputRef = useRef()
    const portInputRef = useRef()
    const databaseInputRef = useRef()
    const userInputRef = useRef()
    const passwordInputRef = useRef()
    const [dbSelection, setDbSelection] = useState("");


    function submit(event) {
        event.preventDefault();

        const submittedData = {
            short_name: dbSelection.value,
            host: hostInputRef.current.value,
            port: parseInt(portInputRef.current.value),
            database: databaseInputRef.current.value,
            user: userInputRef.current.value,
            password: passwordInputRef.current.value
        }
        const token = sessionStorage.getItem('token');
        const tokenStr = JSON.parse(token);
        fetch('http://127.0.0.1:8000/api/v1/database-connections/create-or-update-connection/',
            {
                method: "POST",
                body: JSON.stringify(submittedData),
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "token " + tokenStr
                }
            }
        ).then(() => window.location.reload());
    }

    return (
        <div className='card'>
            <h2>Set connection configuration</h2>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="host">Host: </label>
                    <input type="text" id="host" ref={hostInputRef} required/>
                </div>
                <div>
                    <label htmlFor="port">Port: </label>
                    <input type="text" id="port" ref={portInputRef} required/>
                </div>
                <div>
                    <label htmlFor="database">Database: </label>
                    <input type="text" id="database" ref={databaseInputRef} required/>
                </div>
                <div>
                    <label htmlFor="user">User: </label>
                    <input type="text" id="user" ref={userInputRef} required/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" ref={passwordInputRef} required/>
                </div>
                <br/>
                <Select options={dbOptions}
                        onChange={(option) => setDbSelection(option)}/>
                <br/>
                <div>
                    <button className='btn'>Set configuration</button>
                </div>
            </form>
            <br/>
            <LineBreak/>
            <div >
                <DatabaseConnection dbNames={dbOptions}/>
            </div>
        </div>

    );
}

export default DataBaseAdministration;