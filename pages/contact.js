import { encodeForm } from "common";
import {
  Button,
  Column,
  ErrorMessage,
  Input,
  Label,
  Layout,
  TextArea,
} from "components";
import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

const SubmitMessage = () => (
  <>
    <p className="text-3xl mb-12">
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
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Leonard"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorCondition={errors.name && touched.name}
                />
                {errors.name && touched.name && (
                  <ErrorMessage error={errors.name} />
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="lmccoy@enterprise.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorCondition={errors.email && touched.email}
                />
                {errors.email && touched.email && (
                  <ErrorMessage error={errors.email} />
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  value={values.message}
                  placeholder="Damn it Jim, I'm a doctor not a form field."
                  errorCondition={errors.message && touched.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message && (
                  <ErrorMessage error={errors.message} />
                )}
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </div>

            {submitError && (
              <p className="text-red-500 dark:text-red-500 text-center italic mt-5">
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
