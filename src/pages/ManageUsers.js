import {useState} from 'react'

import {LineBreak} from "../components/LineBreak";
import {ConfirmationModal} from "../components/ConfirmationModal";
import {Backdrop} from "../components/Backdrop";

function ManageUsers() {

    const [isModalVisible, setModelVisible] = useState(false);

    function confirmDelete() {
        setModelVisible(true)
    }

    function deleteUser() {
        console.log("sent http request to delete the user")
        setModelVisible(false)
    }

    function cancelDelete() {
        setModelVisible(false)
    }

    return (
        <div className='card'>
            <h2>Manage Users</h2>
            <LineBreak/>
            Some user
            <button className='btn' value='delete-user' onClick={confirmDelete}>Delete</button>
            {isModalVisible ?
                <ConfirmationModal onCancel={cancelDelete} onDelete={deleteUser}/> : null}
            {isModalVisible ? <Backdrop/> : null}
        </div>
    );
}

export default ManageUsers;