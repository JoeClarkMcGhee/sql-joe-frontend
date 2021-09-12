import {useState} from "react";

function useAllowedDatabases() {

    const getAllowedDatabases = () => {
        const allowedDatabases = sessionStorage.getItem('allowedDatabases');
        if (allowedDatabases) {
            return JSON.parse(allowedDatabases);
        } else return undefined;
    }

    const [allowedDatabases, setAllowedDatabases] = useState(getAllowedDatabases());

    const saveResultToSessionStorage = result => {
        if (result) {
            sessionStorage.setItem('allowedDatabases', JSON.stringify(result));
            setAllowedDatabases(result.allowedDatabases);
        }
    };


    return {
        setAllowedDatabases: saveResultToSessionStorage,
        allowedDatabases
    }
}

export default useAllowedDatabases;