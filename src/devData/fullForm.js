const fieldTemplate = {
  id: 2, //same table as formTemplate?
  component: "TextBox",
  opts: "",
  value: "test text box",
  creationDate: "timestamp",
  modificationDate: "timestamp"
};
const formtemplate = {
  id: 1,
  teams: ["default", "awesome"],
  component: "Form",
  access: "general",
  creationDate: "timestamp",
  modificationDate: "timestamp"
};
const fullForm = {
  id: 1,
  template: {
    teams: ["default", "awesome"],
    component: "Form",
    creationDate: "timestamp",
    modificationDate: "timestamp"
  },
  fields: [
    {
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 1,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my test text",
      creationDate: "timestamp",
      modificationDate: "timestamp"
    }
  ],
  access: "general",
  creationDate: "timestamp",
  modificationDate: "timestamp"
};
