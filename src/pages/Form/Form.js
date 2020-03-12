import React from "react";
import "./Form.css";

import PosterImage from "../../components/PosterImage/PosterImage";
import FormFields from "../../components/FormFields/FormFields";
const Form = () => {
  return (
    <div className="form__main">
      <PosterImage />
      <FormFields />
    </div>
  );
};

export default Form;
