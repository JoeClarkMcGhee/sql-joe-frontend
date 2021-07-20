import {useState, useEffect} from 'react'

import {LineBreak} from "../components/LineBreak";
import UserDetailList from "../components/user_detail/UserDetailList";


function ManageUsers() {

    const [isModalVisible, setModelVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUserData, setLoadedUserData] = useState([])
    const [isBadRequest, setIsBadRequest] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(
            "http://127.0.0.1:8000/api/v1/users/"
        ).then((response) => {
            return response.json();
        }).then((data) => {
            setIsLoading(false);
            setLoadedUserData(data);
        }).catch(error => {
                setIsBadRequest(true);
                setIsLoading(false);
            }
        );
    }, [])


    if (isLoading) {
        return (
            <div>
                <LineBreak/>
                <p>Loading....</p>
            </div>
        );
    }

    function confirmDelete() {
        setModelVisible(true)
    }

    function cancelDelete() {
        setModelVisible(false)
    }

    function deleteUser(userId) {
        console.log("deleteUser: " + userId);
        setModelVisible(false);
    }

    if (isBadRequest && !isLoading) {
        return (
            <div className='card'>
                <h2>Manage Users</h2>
                <LineBreak/>
                Bad request
            </div>
        );
    } else {
        return (
            <div className='card'>
                <h2>Manage Users</h2>
                <LineBreak/>
                <UserDetailList userData={loadedUserData} isModalVisible={isModalVisible}
                                onClick={confirmDelete} onCancel={cancelDelete}
                                onDelete={deleteUser}/>
            </div>
        );
    }
}

export default ManageUsers;