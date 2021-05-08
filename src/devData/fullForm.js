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
    modificationDate: "timestamp",
    modificationBy: "name"
  },
  fields: [
    {
      id: 3,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 3,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my test text",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 4,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 4,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my second test text",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 5,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 5,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "here's a third value",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 6,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 6,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "a last bit of testing input",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 10,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 0,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my test text",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 9,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 9,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "my second test text",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 8,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 8,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "here's a third value",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 7,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 7,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "a last bit of testing input",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 12,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 2,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "here's a third value",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 11,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 1,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "a last bit of testing input",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    },
    {
      id: 15,
      template: {
        id: 2,
        component: "TextBox"
      },
      order: 15,
      opts: ["style", "thing", "etc"], //focus on opts later
      value: "a last bit of testing input",
      title: "test label",
      creationDate: "timestamp",
      modificationDate: "timestamp",
      modificationBy: "name"
    }
  ],
  title: "Constructed Title",
  access: "general",
  creationDate: "timestamp",
  modificationDate: "timestamp",
  modificationBy: "name"
};
