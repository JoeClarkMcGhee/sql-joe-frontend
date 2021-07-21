import {Backdrop} from "./Backdrop";
import {ConfirmationModal} from "./ConfirmationModal";

function UserDetail(props) {
    return (
        <div>
            <li className='list'>
                {props.email + " - " + props.name}
                <button className='btn' value='delete-user' onClick={props.onClick}>Delete</button>
                {props.isModalVisible ? <ConfirmationModal onCancel={props.onCancel}
                                                           onDelete={props.onDelete}
                                                           id={props.id}/> : null}
                {props.isModalVisible ? <Backdrop/> : null}
            </li>
            <br/>
        </div>
    )
}

export default UserDetail;