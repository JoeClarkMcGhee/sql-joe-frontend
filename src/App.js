import {Route, Switch} from 'react-router-dom'

import ConnectToDB from './pages/ConnectToDB';
import ManageUsers from "./pages/ManageUsers";
import QueryDB from "./pages/QueryDB";
import NavBar from "./components/navigation_bar/NavBar";


function App() {
    return (
        <div>
            <NavBar/>
            <main>
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
            </main>
        </div>
    );
}

export default App;
