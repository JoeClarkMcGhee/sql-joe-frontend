import {Route, Switch} from 'react-router-dom'

import ConnectToDB from './pages/ConnectToDB';
import ManageUsers from "./pages/ManageUsers";
import QueryDB from "./pages/QueryDB";
import NavBar from "./components/navigation_bar/NavBar";
import LogInForm from "./pages/LogInForm";
import useToken from "./components/useToken";
import useIsAdmin from "./components/useIsAdmin";


function App() {
    const {token, setToken} = useToken();
    const {isAdmin, setIsAdmin} = useIsAdmin();

    if (!token) {
        return <LogInForm setToken={setToken} setIsAdmin={setIsAdmin}/>
    }

    // # todo: add a form to manage users to create a user
    return (
        <div>
            <NavBar/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <QueryDB/>
                    </Route>
                    {
                        isAdmin ?
                            <Route path="/connect">
                                <ConnectToDB/>
                            </Route> : null
                    }
                    {
                        isAdmin ?
                            <Route path="/manage-users">
                                <ManageUsers/>
                            </Route> : null
                    }
                </Switch>
            </main>
        </div>
    );
}

export default App;
