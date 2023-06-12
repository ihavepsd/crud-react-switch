import "./styles.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./components/AddPost";
//import EditUser from "./components/EditUser";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Nav</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addpost" component={AddUser} />
          <Route exact path="/addpost/:id" component={AddUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
