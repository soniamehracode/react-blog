import React, { useState } from "react";
import Topbar from "./component/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Ragister from "./pages/ragister/Ragister";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const users = false;
  return (
    <Router>
      <Topbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/ragister">{users ? <Home /> : <Ragister />}</Route>
        <Route path="/login">{users ? <Home /> : <Login />}</Route>
        <Route path="/write">{users ? <Write /> : <Ragister />}</Route>

        <Route path="/settings">{users ? <Settings /> : <Ragister />}</Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
