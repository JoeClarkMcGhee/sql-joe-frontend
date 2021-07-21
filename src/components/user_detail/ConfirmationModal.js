function ConfirmationModal(props) {
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn' onClick={props.onCancel}>Cancel</button>
            {/*<button className='btn' onClick={props.onDelete}>Confirm</button>*/}
            <button className='btn' onClick={() => props.onDelete(props.id)}>Confirm</button>
        </div>
    );
}

export {ConfirmationModal}