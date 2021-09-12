import {useRef} from "react";


function RegisterUser() {
    const userInputRef = useRef()
    const emailInputRef = useRef()
    const password1InputRef = useRef()
    const password2InputRef = useRef()
    const allowedDBsInputRef = useRef()

    function submit(event) {
        event.preventDefault();
        const submittedData = {
            username: userInputRef.current.value,
            email: emailInputRef.current.value,
            password1: password1InputRef.current.value,
            password2: password2InputRef.current.value,
            allowed_dbs: allowedDBsInputRef.current.value
        }
        fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/',
            {
                method: "POST",
                body: JSON.stringify(submittedData),
                headers: {
                    'Content-Type': "application/json",
                }
            }
        ).then(() => window.location.reload());
    }

    // https://docs.djangoproject.com/en/dev/ref/csrf/#ajax


    return (
        <div>
            <h3>Register new user</h3>
            <div>
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="user">Username: </label>
                        <input type="text" id="user" ref={userInputRef} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" ref={emailInputRef} required/>
                    </div>
                    <div>
                        <label htmlFor="password1">Password1: </label>
                        <input type="password" id="password1" ref={password1InputRef} required/>
                    </div>
                    <div>
                        <label htmlFor="password2">Password2: </label>
                        <input type="password" id="password2" ref={password2InputRef} required/>
                    </div>
                    <div>
                        <label htmlFor="allowedDBs">Allowed Databases: </label>
                        <input type="text" id="allowedDBs" ref={allowedDBsInputRef} required/>
                    </div>
                    <br/>
                    <div>
                        <button className='btn'>Register User</button>
                    </div>
                </form>
            </div>
        </div>

    );

}


export default RegisterUser;