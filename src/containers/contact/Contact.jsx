import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as Yup from "yup";

import { LayoutDefault } from "../../components";
import { history } from "../../util/history";
import { encode } from "../../util/submit";

const ContactForm = () => {
  const [submitError, setSubmitError] = useState();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, actions) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        actions.resetForm();
        history.push({ hash: "#success" });
      })
      .catch(() => {
        setSubmitError("Something went wrong.");
      })
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <form
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <h1 className="title is-size-2">Get in touch.</h1>
            </div>

            <div className="columns is-multiline">
              <div className="column is-6">
                <div className="field contact-field-name">
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                  <div className="control">
                    <input
                      id="name"
                      placeholder="Leonard"
                      type="text"
                      className={`input ${
                        errors.name && touched.name && "is-danger"
                      }`}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <p className="help is-danger">{errors.name}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="field contact-field-email">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <div className="control">
                    <input
                      id="email"
                      placeholder="lmccoy@enterprise.ufp"
                      type="email"
                      className={`input ${
                        errors.email && touched.email && "is-danger"
                      }`}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="column is-12">
                <div className="field contact-field-message">
                  <label className="label" htmlFor="message">
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      id="message"
                      placeholder="Damn it Jim, I'm a doctor not a form field."
                      type="text"
                      className={`textarea has-fixed-size ${
                        errors.message && touched.message && "is-danger"
                      }`}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message && (
                      <p className="help is-danger">{errors.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="column is-12">
                <div className="field contact-field-submit">
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-primary is-fullwidth ${
                        isSubmitting ? "is-loading" : ""
                      }`}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {submitError && <p className="has-text-danger">{submitError}</p>}
          </form>
        );
      }}
    </Formik>
  );
};

const SubmitMessage = () => {
  return (
    <>
      <p className="is-size-4 has-text-centered">
        Thanks! I'll get back to you as soon as I can.
      </p>
      <p className="is-size-4 has-text-centered">
        <Link to="/" className="has-text-weight-semibold nav-link">
          Home
        </Link>
      </p>
    </>
  );
};
const Contact = () => {
  const { hash } = useLocation();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const success = hash && hash === "#success";
    setSubmitted(success);
  }, [hash]);

  return (
    <LayoutDefault title="Contact">
      {submitted ? <SubmitMessage /> : <ContactForm />}
    </LayoutDefault>
  );
};
export default Contact;
