import React from "react";
import NewForm from "./NewForm";
import { Route, useRouteMatch } from "react-router-dom";

const NewMaker = (props) => {
  // const [view, setView] = useState(null);
  // const [team, setTeam] = useState({});
  // const [project, setProject] = useState({});
  // const [form, setForm] = useState({});
  // const [fields, setFields] = useState([]);
  const { path } = useRouteMatch();
  return (
    <div className="NewMaker">
      <Route path={`${path}/form`}>
        <NewForm />
      </Route>
    </div>
  );
};

export default NewMaker;
