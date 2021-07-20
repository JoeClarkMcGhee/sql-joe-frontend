import UserDetail from "./UserDetail";

function UserDetailList(props) {

    const onDeleteButtonFactory = (function (id) {
        return () => props.onDelete(id)
    })

    return (
        <ul>
            {
                props.userData.map((user) => {
                    return <UserDetail
                        key={user.id}
                        id={user.id}
                        email={user.email}
                        name={user.username}
                        isModalVisible={props.isModalVisible}
                        onClick={props.onClick}
                        onCancel={props.onCancel}
                        // onDelete={onDeleteButtonFactory(user.id)}
                        onDelete={props.onDelete}
                    />;
                })
            }
        </ul>
    );
}

export default UserDetailList;

