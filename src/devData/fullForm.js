// const fieldTemplate = {
//   id: 2, //same table as formTemplate?
//   component: "TextBox",
//   creationDate: "timestamp",
//   modificationDate: "timestamp"
// };
// const formtemplate = {
//   id: 1,
//   teams: ["default", "awesome"],
//   component: "Form",
//   access: "general",
//   creationDate: "timestamp",
//   modificationDate: "timestamp"
// };
export const fullForm = {
  id: 1,
  template: {
    teams: ["default", "awesome"],
    component: "Form",
    creationDate: "timestamp",
    modificationDate: "timestamp"
  },
  fields: [
    {
      id: 3,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 2,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my test text",
      creationDate: "timestamp",
      modificationDate: "timestamp"
    },
    {
      id: 4,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 1,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my second test text",
      creationDate: "timestamp",
      modificationDate: "timestamp"
    }
  ],
  title: "Constructed Title",
  access: "general",
  creationDate: "timestamp",
  modificationDate: "timestamp"
};
