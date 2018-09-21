import React from "react";
import { reduxForm, Field } from "redux-form";

let NewBookForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" name="title" component="input" />
      <Field type="text" name="link" component="input" />
      <button type="submit">Submit</button>
    </form>
  );
};

NewBookForm = reduxForm({
  form: "NewBookForm"
})(NewBookForm);

export default NewBookForm;
