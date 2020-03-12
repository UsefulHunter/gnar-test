import React from "react";
import "./FormFields.css";

const FormFields = () => {
  return (
    <main className="formFields__main">
      <h1 className="formFields__title">ADD NEW CAT</h1>
      <form className="formFields__form" onSubmit={() => console.log("info")}>
        <h2 className="formFields__section-title">Cat</h2>
        <section className="formFields__section-cat">
          <h4 className="formFields__section-label">Name</h4>
          <input
            className="formFields__section-form"
            type="text"
            placeholder="Insert Cat name, please"
            name="name"
          />

          <h4 className="formFields__section-label">Breed</h4>
          <input
            className="formFields__section-form"
            type="text"
            placeholder="Cat Breed"
            name="breed"
          />

          <h4 className="formFields__section-label">Origin</h4>
          <input
            className="formFields__section-form"
            type="text"
            placeholder="Origin"
            name="origin"
          />

          <h4 className="formFields__section-label">Temperament</h4>
          <input
            className="formFields__section-form"
            type="text"
            placeholder="What's his temperament?"
            name="temperament"
          />
        </section>
        <h2 className="formFields__section-title">Ownership</h2>
        <section className="formFields__section-ownership">
          <h4 className="formFields__section-label">Location</h4>
          <input
            className="formFields__section-form"
            type="text"
            name="location"
          />

          <h4 className="formFields__section-label">Organization</h4>
          <input
            className="formFields__section-form"
            type="text"
            name="organization"
          />

          <h4 className="formFields__section-label">Medical record</h4>
          <div className="formFields__fileInput-group">
            <input
              className="formFields__section-form-file_field"
              type="text"
              name="medicalRecord"
            />
            <input
              className="formFields__section-form-file"
              type="file"
              name="medicalRecord"
            />
          </div>
        </section>
        <button type="submit" className="formFields__button-submit">
          <span className="formFields__button-label">NEXT</span>
          <i className="material-icons formFields__icon">arrow_forward</i>
        </button>
      </form>
    </main>
  );
};

export default FormFields;
