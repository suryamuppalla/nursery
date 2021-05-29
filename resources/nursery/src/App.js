import "./App.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AddNewPlant from "./add-new-plant/Add-new-plant";
import NurseryList from "./nursery-list/Nursery-list";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {
    return (
        <Router>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    Nursery
                </Link>
                <span className="flex-grow-1 invisible">dkdk</span>
                <Link to="/add-new-plant" className="btn btn-primary">
                    Add New Plant
                </Link>
            </nav>

            <div className="container mt-3">
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/" component={NurseryList}/>
                    <Route path="/add-new-plant" render={(props) => (
                        <AddNewPlant {...props} />
                    )}/>
                    <Route path="/nursery-list" component={NurseryList}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
