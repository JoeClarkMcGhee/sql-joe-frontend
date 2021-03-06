import {useEffect, useState} from "react";
import {LineBreak} from "../LineBreak";

function CurrentConnectionConfig(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedConfig, setLoadedConfig] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const tokenStr = JSON.parse(token);
        const url = "http://127.0.0.1:80/api/v1/database-connections/get-specific-database-config/?short_name=" + props.dbName
        fetch(url, {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "token " + tokenStr
                }
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const values = [data.host, data.database, data.port, data.user]
            setIsLoading(false);
            setLoadedConfig(values);
        });

    })

    if (isLoading) {
        return (
            <div>
                <LineBreak/>
                <p>Loading....</p>
            </div>
        );
    }

    return (
        <div>
            Host: <b>{loadedConfig[0]}</b>
            <br/>
            Database: <b>{loadedConfig[1]}</b>
            <br/>
            Port: <b>{loadedConfig[2]}</b>
            <br/>
            User: <b>{loadedConfig[3]}</b>
            <br/>
        </div>
    )
}

export default CurrentConnectionConfig;