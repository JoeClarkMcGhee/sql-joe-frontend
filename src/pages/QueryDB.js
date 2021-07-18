import {LineBreak} from "../components/LineBreak";
import {SubmitButton} from "../components/SubmitButton";

function QueryDB() {
    function submit() {
        console.log("post the query")
    }

    return (
        <div className='card'>
            <h2>Query Database</h2>
            <LineBreak/>
            <label>Query panel</label>
            <textarea rows="10" cols="50"/>
            <SubmitButton value='Execute SQL' submit={submit}/>
        </div>
    )
}

export default QueryDB;