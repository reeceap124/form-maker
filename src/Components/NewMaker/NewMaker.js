import React, { useState } from "react";
import NewForm from "./NewForm";
import NewTeam from "./NewTeam";
import { Route, useRouteMatch } from "react-router-dom";

const NewMaker = (props) => {
  const [view, setView] = useState(null);
  const team = useState({ test: "test team from stateManager" });
  const project = useState({});
  const form = useState({});
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
    team,
    project,
    form,
    fields
  });
  console.log("form state", formsState);
  const { path } = useRouteMatch();
  return (
    <div className="NewMaker">
      <Route path={`${path}/form`}>
        <NewForm states={formsState} />
      </Route>
      <Route path={`${path}/team`}>
        <NewTeam />
      </Route>
    </div>
  );
};

export default NewMaker;
