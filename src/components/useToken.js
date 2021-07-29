import {useState} from "react";

function useToken() {

    const getToken = () => {
        const token = sessionStorage.getItem('token');
        return JSON.parse(token);
    }

    const [token, setToken] = useState(getToken());

    const saveTokenToSessionStorage = token => {
        sessionStorage.setItem('token', JSON.stringify(token));
        setToken(token.token);
    };


    return {
        setToken: saveTokenToSessionStorage,
        token
    }
}

export default useToken;