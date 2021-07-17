import {FormField} from "./utils/FormField"
import {LineBreak} from "./utils/LineBreak";
import {SubmitButton} from "./utils/SubmitButton";


function ConnectToDB() {
    return (
        <div>
            <h1>Connect To Database</h1>
            <LineBreak />
            <form>
                <FormField type="text" label="F1"/>
                <FormField type="text" label="F2"/>
                <FormField type="text" label="F3"/>
                <FormField type="text" label="F4"/>
                <SubmitButton value="Connect" uri="post to here"/>
            </form>
        </div>
    );
}

export {ConnectToDB};