import {LineBreak} from "../components/LineBreak";
import {useRef} from "react";
import ConnectionStatus from "../components/database_operations/ConnectionStatus";
import CurrentConnectionConfig from "../components/database_operations/CurrentConnectionConfig";

function ConnectToDB() {
    const hostInputRef = useRef()
    const portInputRef = useRef()
    const databaseInputRef = useRef()
    const userInputRef = useRef()
    const passwordInputRef = useRef()

    function submit(event) {
        event.preventDefault();

        const submittedData = {
            host: hostInputRef.current.value,
            port: parseInt(portInputRef.current.value),
            database: databaseInputRef.current.value,
            user: userInputRef.current.value,
            password: passwordInputRef.current.value
        }

        fetch('http://127.0.0.1:8000/api/v1/database-connections/set-database-config/',
            {
                method: "POST",
                body: JSON.stringify(submittedData),
                headers: {
                    'Content-Type': "application/json"
                }
            }
        );
    }

    return (
        <div className='card'>
            <h2>Connect To Database</h2>
            <LineBreak/>
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
                <div>
                    <button className='btn'>Connect</button>
                </div>
            </form>
            <LineBreak/>
            <h3>Current Connection Config</h3>
            <CurrentConnectionConfig/>
            <h3>Connection Status</h3>
            <ConnectionStatus/>
        </div>
    );
}

export default ConnectToDB;