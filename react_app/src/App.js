import {Route, Switch} from 'react-router-dom'

import DataBaseAdministration from './pages/DataBaseAdministration';
import ManageUsers from "./pages/ManageUsers";
import QueryDB from "./pages/QueryDB";
import NavBar from "./components/navigation_bar/NavBar";
import LogInForm from "./pages/LogInForm";
import useToken from "./components/useToken";
import useIsAdmin from "./components/useIsAdmin";
import useAllowedDatabases from "./components/useAllowedDatabases";


function App() {
    const {token, setToken} = useToken();
    const {isAdmin, setIsAdmin} = useIsAdmin();
    const {allowedDatabases, setAllowedDatabases} = useAllowedDatabases();

    if (!token) {
        return <LogInForm setToken={setToken}
                          setIsAdmin={setIsAdmin}
                          setAllowedDatabases={setAllowedDatabases}
        />
    }

    return (
        <div>
            <NavBar/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <QueryDB allowedDatabases={allowedDatabases}/>
                    </Route>
                    {
                        isAdmin ?
                            <Route path="/connect">
                                <DataBaseAdministration/>
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
