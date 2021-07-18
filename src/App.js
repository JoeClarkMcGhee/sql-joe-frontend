import {Route, Switch} from 'react-router-dom'

import ConnectToDB from './pages/ConnectToDB';
import ManageUsers from "./pages/ManageUsers";
import QueryDB from "./pages/QueryDB";


function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <QueryDB/>
                </Route>
                <Route path="/connect">
                    <ConnectToDB/>
                </Route>
                <Route path="/manage-users">
                    <ManageUsers/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
