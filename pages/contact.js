import { encodeForm } from "common";
import { Button, Column, Layout } from "components";
import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

const SubmitMessage = () => (
  <>
    <p className="text-4xl">
      Thanks! I&apos;ll get back to you as soon as I can.
    </p>
    <Link href="/">
      <a>
        <p className="text-3xl text-green-500 hover:text-green-800 dark:text-green-400 dark:hover:text-green-100 text-center color-fade">
          &larr; Back to home
        </p>
      </a>
    </Link>
  </>
);

const ContactForm = ({ submit }) => {
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
      body: encodeForm({ "form-name": "contact", ...values }),
    })
      .then(() => {
        submit();
        actions.resetForm();
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
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => {
        return (
          <form
            className="w-full mb-4"
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <h1 className="text text-4xl font-semibold mb-4">Get in touch.</h1>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="text block tracking-wide text-gray-700 font-bold mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Leonard"
                  type="text"
                  className={`
                    "block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none" ${
                      errors.name && touched.name && "border-red-500"
                    }`}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 dark:text-red-500 text-xs italic -mt-2">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="text block tracking-wide text-gray-700 font-bold mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="lmccoy@enterprise.com"
                  type="email"
                  className={`
                    "block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none" ${
                      errors.email && touched.email && "border-red-500"
                    }`}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 dark:text-red-500 text-xs italic -mt-2">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <label
                  className="text block tracking-wide text-gray-700 font-bold mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Damn it Jim, I'm a doctor not a form field."
                  type="text"
                  className={`
                    "form-textarea block h-32 resize-none w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none" ${
                      errors.message && touched.message && "border-red-500"
                    }`}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message && (
                  <p className="text-red-500 dark:text-red-500 text-xs italic -mt-2">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>

            {submitError && (
              <p className="text-red-500 dark:text-red-500 text-xs italic mt-5">
                {submitError}
              </p>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const submit = () => setSubmitted(true);

  return (
    <Layout title="Contact">
      <Column>
        {submitted ? <SubmitMessage /> : <ContactForm submit={submit} />}
      </Column>
    </Layout>
  );
};

export default Contact;
