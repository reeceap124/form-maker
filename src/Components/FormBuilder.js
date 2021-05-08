import React, { useState, useRef, useLayoutEffect } from "react";
import UI from "../UI";
import { fullForm } from "../devData/fullForm";
const props = fullForm;
const FormBuilder = () => {
  const orderObjects = (a, b) => (a.order > b.order ? 1 : -1);
  const [fields, setFields] = useState([props.fields.sort(orderObjects)]);
  const [pages, setPages] = useState(fields);
  const [page, setPage] = useState(0);
  const formRef = useRef(null);
  //Map for keeping fields in order
  const fieldRef = useRef(new Map());

  //How to decouple from fields[page]????
  const paginateForm = (fieldsRef, target) => {
    const pagesArr = [[]];
    let currentPage = pagesArr.length - 1;
    let pageHeight = 0;
    for (let [key, value] of fieldsRef) {
      const { marginLeft, marginRight } = getComputedStyle(value);
      const outerHeight =
        Number(marginLeft.replace("px", "")) +
        Number(marginRight.replace("px", "")) +
        value.offsetHeight;
      if (value === null) continue;
      if (outerHeight >= target) {
        if (pagesArr[currentPage].length < 1) {
          pagesArr[currentPage].push(
            fields[page].filter((val) => val.id == key)[0]
          );
        } else {
          pagesArr.push(fields[page].filter((val) => val.id == key));
        }
        pageHeight = 0;
        currentPage = pagesArr.length - 1;
        continue;
      }

      if (pageHeight + outerHeight > target) {
        pagesArr.push(fields[page].filter((val) => val.id == key));
        pageHeight = outerHeight;
        currentPage = pagesArr.length - 1;
        continue;
      }

      if (pageHeight + outerHeight <= target) {
        pagesArr[currentPage].push(
          fields[page].filter((val) => val.id == key)[0]
        );
        pageHeight += outerHeight;
        currentPage = pagesArr.length - 1;
      }
    }
    return pagesArr;
  };

  useLayoutEffect(() => {
    if (fieldRef.current) {
      const innerHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const formHeight = formRef.current.offsetHeight;
      const target = innerHeight - (docHeight - formHeight);
      setFields(paginateForm(fieldRef.current, target));
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
    console.log("Submitted", pages);
  };

  return (
    <>
      <Form title={props.title} onSubmit={handleSubmit} ref={formRef}>
        {fields[page]
          ? fields[page].map((field, index) => {
              const Field = UI[field.template.component];
              return (
                <Field
                  key={`form_${props.id}__field_${field.id}`}
                  value={field.value}
                  name={`form_${props.id}__field_${field.id}`}
                  onChange={handleChanges(index)}
                  ref={(el) => fieldRef.current.set(field.id, el)}
                />
              );
            })
          : null}
      </Form>
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
