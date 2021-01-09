import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Change from "../pages/Change";
import Reciepes from "../pages/Reciepes";

function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/change_context" component={Change} />
      <Route path="/reciepes" component={Reciepes} />
    </>
  );
}

export default Routes;
