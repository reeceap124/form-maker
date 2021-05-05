import React, { useState, useRef, useLayoutEffect } from "react";
import UI from "../UI";
import { fullForm } from "../devData/fullForm";
const props = fullForm;
const FormBuilder = () => {
  const orderObjects = (a, b) => (a.order > b.order ? 1 : -1);
  const [fields, setFields] = useState(props.fields.sort(orderObjects));

  const formRef = useRef(null);
  const fieldRef = useRef(new Map());
  useLayoutEffect(() => {
    if (formRef.current) {
      console.log("Document height: ", document.body.scrollHeight);
      console.log("inner height", window.innerHeight);
      console.log("ref height", formRef.current.offsetHeight);
      for (const f in fieldRef.current) {
        console.log(`Field ${f}:`, fieldRef.current[f].offsetHeight);
      }
    }
  }, []);

  const Form = UI[props.template.component];

  const handleChanges = (index) => (e) => {
    let newArr = [...fields];
    newArr[index].value = e.target.value;
    setFields(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <Form title={props.title} onSubmit={handleSubmit} ref={formRef}>
      {fields.map((field) => {
        const Field = UI[field.template.component];
        return (
          <Field
            key={`form_${props.id}__field_${field.id}`}
            value={field.value}
            name={`form_${props.id}__field_${field.id}`}
            onChange={handleChanges(field.order)}
            ref={(el) => (fieldRef.current[field.id] = el)}
          />
        );
      })}
    </Form>
  );
};
export default FormBuilder;
