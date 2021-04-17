import React from "react";
import UI from "../UI";
import { fullForm } from "../devData/fullForm";
const props = fullForm;
const FormBuilder = () => {
  const orderObects = (a, b) => (a.order > b.order ? 1 : -1);
  const fields = props.fields.sort(orderObects);

  const Form = UI[props.component];
  return fields.map((field) => {
    const Field = UI[field.template.component];
    return <Field value={field.value} />;
  });
};
export default FormBuilder;
