import {ConnectToDB} from './components/ConnectToDB';
import {LineBreak} from "./components/utils/LineBreak";


function App() {
    return (
        <div>
            <ConnectToDB/>
            <ManageUsers/>
        </div>
    );
}

export default App;
