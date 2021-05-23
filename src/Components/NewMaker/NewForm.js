import React from "react";
import "./NewForm.scss";

const teams = ["Awesome", "Superbad"];
const projects = ["World Domination"];
// const templates = [];
const NewForm = () => {
  const AddOption = ({ name, callback }) => {
    return <option>Add {name}</option>;
  };
  console.log("we made it to newform");
  return (
    <div className="NewForm">
      <label>
        Team:
        <select onChange={() => console.log("clickyboi")}>
          {teams.map((t, i) => (
            <option key={`team_${i}`}>{t}</option>
          ))}
          <AddOption name="team" />
        </select>
      </label>
      <label>
        Project:
        <select>
          {projects.map((p, i) => (
            <option key={`project_${i}`}>{p}</option>
          ))}
          <AddOption name="project" />
        </select>
      </label>
      <label>
        Title:
        <input />
      </label>
      <label>
        Description:
        <textarea />
      </label>
    </div>
  );
};
export default NewForm;
