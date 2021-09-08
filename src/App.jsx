import React from "react";
import Header from "./pages/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/index";

import Check from "./pages/check";
import CheckVideo from "./pages/checkVideo";
import Proof from "./pages/proof";
import Logis from "./pages/logis";
import UserInfo from "./pages/userInfo";

import FormOne from "./pages/formOne";
import FormTwo from "./pages/formTwo";
import FormThree from "./pages/formThree";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/check">
            <Check />
          </Route>
          <Route exact path="/checkVideo">
            <CheckVideo />
          </Route>
          <Route exact path="/proof">
            <Proof />
          </Route>
          <Route exact path="/logis">
            <Logis />
          </Route>
          <Route exact path="/userInfo">
            <UserInfo />
          </Route>
          <Route exact path="/formOne">
            <FormOne />
          </Route>
          <Route exact path="/formTwo">
            <FormTwo />
          </Route>
          <Route exact path="/formThree">
            <FormThree />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
