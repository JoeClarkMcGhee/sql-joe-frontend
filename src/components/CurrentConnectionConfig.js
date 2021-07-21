import {useEffect, useState} from "react";
import {LineBreak} from "./LineBreak";


function CurrentConnectionConfig() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedConfig, setLoadedConfig] = useState(false)

    useEffect(() => {
        fetch(
            "http://127.0.0.1:8000/api/v1/database-connections/get-database-config/"
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const values = [data.host, data.port, data.database, data.user]
            setIsLoading(false);
            setLoadedConfig(values);
        });

    }, [])

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