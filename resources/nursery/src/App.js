import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import AddNewPlant from "./add-new-plant/Add-new-plant";
import NurseryList from "./nursery-list/Nursery-list";
import NurseryDetails from "./nursery-details/Nursery-details";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Nursery</Link>
                <span className="flex-grow-1 invisible">dkdk</span>
                <Link to="/add-new-plant" className="btn btn-primary">Add New Plant</Link>
            </nav>

            <div className="container mt-3">

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/nursery-list"/>
                    </Route>
                    <Route path="/add-new-plant">
                        <AddNewPlant/>
                    </Route>
                    <Route path="/nursery-list">
                        <NurseryList/>
                    </Route>
                    <Route path="/nursery-details/:nurseryId">
                        <NurseryDetails/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
