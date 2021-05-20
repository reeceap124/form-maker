import React from "react";
import { Route } from "react-router-dom";

import FormBuilder from "../FormBuilder";

export default () => {
  return (
    <>
      <Route exact path="/form/:id">
        <FormBuilder />
      </Route>
    </>
  );
};
