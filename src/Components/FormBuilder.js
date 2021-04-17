import React, { useState } from "react";
import UI from "../UI";
import { fullForm } from "../devData/fullForm";
const props = fullForm;
const FormBuilder = () => {
  const orderObects = (a, b) => (a.order > b.order ? 1 : -1);
  const [fields, setFields] = useState(props.fields.sort(orderObects));
  //   const fields = props.fields.sort(orderObects);
  const Form = UI[props.template.component];
  const handleChanges = (index) => (e) => {
    console.log("starting handle changes");
    let newArr = [...fields];
    newArr[index].value = e.target.value;
    setFields(newArr);
  };
  return (
    <Form title={props.title}>
      {fields.map((field) => {
        const Field = UI[field.template.component];
        return (
          <Field
            key={`form_${props.id}__field_${field.id}`}
            value={field.value}
            name={`form_${props.id}__field_${field.id}`}
            onChange={handleChanges(field.order - 1)}
          />
        );
      })}
    </Form>
  );
};
export default FormBuilder;
