import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Signup, Profile, Chats } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chats" component={Chats} />
      </Switch>
    </Router>
  );
}

export default App;
