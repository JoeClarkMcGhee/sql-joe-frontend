import {useState, useEffect} from 'react'
import {LineBreak} from "../components/LineBreak";
import UserDetailList from "../components/user_detail/UserDetailList";
import RegisterUser from "../components/user_detail/RegisterUser";


function ManageUsers() {

    const [isModalVisible, setModelVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUserData, setLoadedUserData] = useState([])
    const [isBadRequest, setIsBadRequest] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const token = sessionStorage.getItem('token');
        const tokenStr = JSON.parse(token);
        fetch(
            "http://127.0.0.1:80/api/v1/users/", {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "token " + tokenStr
                }
            }
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
        const token = sessionStorage.getItem('token');
        const tokenStr = JSON.parse(token);
        fetch('http://127.0.0.1:80/api/v1/users/delete/' + userId + "/",
            {
                method: "DELETE",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': "token " + tokenStr
                }
            }
        ).then((response) => {
                setModelVisible(false)
                window.location.reload()
            }
        )
    }

    if (isBadRequest && !isLoading) {
        return (
            <div className='card'>
                <h2>Manage Users</h2>
                <LineBreak/>
                Bad request
            </div>
        );
    }
    return (
        <div className='card'>
            <h2>Manage Users</h2>
            <LineBreak/>
            <UserDetailList userData={loadedUserData}
                            isModalVisible={isModalVisible}
                            onClick={confirmDelete}
                            onCancel={cancelDelete}
                            onDelete={deleteUser}
            />
            <LineBreak/>
            <RegisterUser/>
        </div>
    );
}


export default ManageUsers;