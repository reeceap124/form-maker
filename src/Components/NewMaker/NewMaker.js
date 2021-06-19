import React, { useState } from "react";
import NewForm from "./NewForm";
import NewTeam from "./NewTeam";
import { Route, useRouteMatch } from "react-router-dom";

const NewMaker = (props) => {
  const [view, setView] = useState(null);
  const teams = useState({ test: "test team from stateManager" });
  const projects = useState({});
  const forms = useState({});
  const fields = useState([]);
  const [newForm, setNewForm] = useState({
    template: undefined,
    title: undefined,
    public: true,
    creationDate: new Date(),
    modificationDate: undefined,
    modifiedBy: undefined,
    fields: []
  });
  const stateManager = () => {
    return {
      newStates: function (states) {
        for (const s in states) {
          this[s] = states[s];
        }
        return this;
      },

      set: function (state, value) {
        return this[state][1](value);
      },
      get: function (state) {
        return this[state][0];
      }
    };
  };
  const formsState = stateManager().newStates({
    teams,
    projects,
    forms,
    fields
  });
  console.log("form state", formsState);

  console.log("gotten teams", formsState.get("teams"));
  formsState.get("teams").test &&
    formsState.set("teams", { test2: "here be another update" });
  console.log("gotten teams2", formsState.get("teams"));
  const { path } = useRouteMatch();
  return (
    <div className="NewMaker">
      <Route path={`${path}/form`}>
        <NewForm />
      </Route>
      <Route path={`${path}/team`}>
        <NewTeam />
      </Route>
    </div>
  );
};

export default NewMaker;
