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
  useLayoutEffect(() => {
    if (fieldRef.current) {
      const innerHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const formHeight = formRef.current.offsetHeight;
      const target = innerHeight - (docHeight - formHeight) - 80;
      setFields(paginateForm(fieldRef.current, target, fields[page]));
    }
  }, [props.fields, fieldRef.current]);

  const Form = UI[props.template.component];

  const handleChanges = (index) => (e) => {
    let newArr = [...fields];
    newArr[page][index].value = e.target.value;
    setFields(newArr);
  };

  const handlePage = (index) => (e) => {
    e.preventDefault();
    if (index < 0) return;
    if (index >= fields.length) return;
    setPage(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", fields);
  };

  return (
    <>
      <PageIndicator
        length={fields?.length ? fields.length : 0}
        active={page}
        handleClick={setPage}
      />
      <TransitionGroup component={null}>
        <Form title={props.title} onSubmit={handleSubmit} ref={formRef}>
          {fields[page]
            ? fields[page].map((field, index) => {
                const Field = UI[field.template.component];
                return (
                  <CSSTransition
                    key={`form_${props.id}__field_${field.id}`}
                    in={true}
                    appear={true}
                    classNames="FormItem"
                    timeout={750}
                  >
                    <Field
                      cName="FormItem"
                      value={field.value}
                      label={field.title}
                      name={`form_${props.id}__field_${field.id}`}
                      onChange={handleChanges(index)}
                      ref={(el) => fieldRef.current.set(field.id, el)}
                    />
                  </CSSTransition>
                );
              })
            : null}
        </Form>
      </TransitionGroup>

      <button onClick={handlePage(page - 1)}>Prev</button>
      <button onClick={handlePage(page + 1)}>Next</button>
    </>
  );
};
export default FormBuilder;
