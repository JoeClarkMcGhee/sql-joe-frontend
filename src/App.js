import {ConnectToDB} from './components/ConnectToDB';
import {ManageUsers} from "./components/ManageUsers"


function App() {
    return (
        <div>
            <ConnectToDB/>
            <br></br>
            <ManageUsers/>
        </div>
    );
}

export default App;
