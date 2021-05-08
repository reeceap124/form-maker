import React, { useState, useRef, useLayoutEffect } from "react";
import { paginateForm } from "./util";
import UI from "../../UI";
import PageIndicator from "../../UI/PageIndicator";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { fullForm } from "../../devData/fullForm";
const props = fullForm;
const FormBuilder = () => {
  const orderObjects = (a, b) => (a.order > b.order ? 1 : -1);
  const [fields, setFields] = useState([props.fields.sort(orderObjects)]);
  const [page, setPage] = useState(0);
  const formRef = useRef(null);
  //Map for keeping fields in order
  const fieldRef = useRef(new Map());
  console.log("DOC HEIGHT", document.body.scrollHeight);
  useLayoutEffect(() => {
    if (fieldRef.current) {
      const innerHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const formHeight = formRef.current.offsetHeight;
      const target = innerHeight - (docHeight - formHeight) - 40;
      setFields(paginateForm(fieldRef.current, target, fields[page]));
    }
  }, [props.fields, fieldRef.current]);

  const Form = UI[props.template.component];

  const handleChanges = (index) => (e) => {
    let newArr = [...fields];
    newArr[page][index].value = e.target.value;
    setFields(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", fields);
  };

  return (
    <>
      <PageIndicator length={fields.length} active={page} />
      <TransitionGroup component={null}>
        <CSSTransition>
          <Form title={props.title} onSubmit={handleSubmit} ref={formRef}>
            {fields[page]
              ? fields[page].map((field, index) => {
                  const Field = UI[field.template.component];
                  return (
                    <Field
                      key={`form_${props.id}__field_${field.id}`}
                      value={field.value}
                      label={field.title}
                      name={`form_${props.id}__field_${field.id}`}
                      onChange={handleChanges(index)}
                      ref={(el) => fieldRef.current.set(field.id, el)}
                    />
                  );
                })
              : null}
          </Form>
        </CSSTransition>
      </TransitionGroup>

      <button
        onClick={(e) => {
          e.preventDefault();
          setPage((prev) => prev - 1);
          console.log("newpage", fields[page]);
        }}
      >
        Prev
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setPage((prev) => prev + 1);
          console.log("newpage", fields[page]);
        }}
      >
        Next
      </button>
    </>
  );
};
export default FormBuilder;
