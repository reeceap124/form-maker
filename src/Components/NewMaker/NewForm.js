import React, { useRef } from "react";
import "./NewForm.scss";
import { Link } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

const teams = ["Awesome", "Superbad"];
const projects = ["World Domination"];
// const templates = [];
const NewForm = (props) => {
  const handleCreate = () => {
    //go to creation page
    //save title of new creation to state
    return null;
  };

  return (
    <div className="NewForm">
      <label>
        Team:
        <CreatableSelect
          onCreateOption={() => {}}
          onChange={() => console.log("clickyboi")}
          options={teams.map((t) => {
            return { value: t, label: t + "Label" };
          })}
        />
        <select>
          {teams.map((t, i) => (
            <option key={`team_${i}`}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        Project:
        <select>
          {projects.map((p, i) => (
            <option key={`project_${i}`}>{p}</option>
          ))}
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
