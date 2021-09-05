import {useState} from "react";

function useIsAdmin() {

    const getIsAdmin = () => {
        const isAdmin = sessionStorage.getItem('isAdmin');
        if (isAdmin) {
            return JSON.parse(isAdmin);
        } else return undefined;
    }

    const [isAdmin, setIsAdmin] = useState(getIsAdmin());

    const saveResultToSessionStorage = result => {
        if (result) {
            sessionStorage.setItem('isAdmin', JSON.stringify(result));
            setIsAdmin(result.isAdmin);
        }
    };


    return {
        setIsAdmin: saveResultToSessionStorage,
        isAdmin: isAdmin
    }
}

export default useIsAdmin;