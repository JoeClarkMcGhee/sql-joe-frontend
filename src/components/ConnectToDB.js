import {FormField} from "./utils/FormField"
import {LineBreak} from "./utils/LineBreak";
import {SubmitButton} from "./utils/SubmitButton";


function ConnectToDB() {
    return (
        <div className='card'>
            <h1>Connect To Database</h1>
            <LineBreak/>
            <form className>
                <FormField type="text" label="Host"/>
                <FormField type="text" label="Database"/>
                <FormField type="text" label="User"/>
                <FormField type="password" label="Password"/>
                <SubmitButton value="Connect" uri="post to here"/>
            </form>
        </div>
    );
}

export {ConnectToDB};