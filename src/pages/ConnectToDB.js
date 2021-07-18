import {FormField} from "../components/FormField";
import {LineBreak} from "../components/LineBreak";
import {SubmitButton} from "../components/SubmitButton";


function ConnectToDB() {
    function submit() {
        console.log("submit the form")
    }

    return (
        <div className='card'>
            <h2>Connect To Database</h2>
            <LineBreak/>
            <form className>
                <FormField type="text" label="Host"/>
                <FormField type="text" label="Database"/>
                <FormField type="text" label="User"/>
                <FormField type="password" label="Password"/>
                <SubmitButton value="Connect" submit={submit}/>
            </form>
        </div>
    );
}

export default ConnectToDB;