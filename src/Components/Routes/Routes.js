import React, { useEffect } from "react";
import NewMaker from "../NewMaker/NewMaker";
import { Route } from "react-router-dom";

import FormBuilder from "../FormBuilder";

export default () => {
  return (
    <>
      <Route exact path="/form/:id">
        <FormBuilder />
      </Route>
      <Route path="/new">
        <NewMaker />
      </Route>
    </>
  );
};
