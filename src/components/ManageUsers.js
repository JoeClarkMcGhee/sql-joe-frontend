import {useState} from 'react'

import {LineBreak} from "./utils/LineBreak";
import {ConfirmationModal} from "./utils/ConfirmationModal";
import {Backdrop} from "./utils/Backdrop";

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
            <h1>Manage Users</h1>
            <LineBreak/>
            Some user
            <button className='btn' value='delete-user' onClick={confirmDelete}>Delete</button>
            {isModalVisible ?
                <ConfirmationModal onCancel={cancelDelete} onDelete={deleteUser}/> : null}
            {isModalVisible ? <Backdrop/> : null}
        </div>
    );
}

export {ManageUsers};