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
import { FormikHelpers, useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const MAX_MESSAGE_LENGTH = 250;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().max(MAX_MESSAGE_LENGTH).required("Message is required"),
});

const SubmitMessage = () => (
  <>
    <p className="text-3xl mb-12">
      Thanks! I&apos;ll get back to you as soon as I can.
    </p>
    <Link href="/">
      <a>
        <p className="text-3xl text-green-500 hover:text-green-800 dark:text-green-400 dark:hover:text-green-100 text-center">
          &larr; Back to home
        </p>
      </a>
    </Link>
  </>
);

const ContactForm = ({ setSubmitted }: { setSubmitted: () => void }) => {
  const [submitError, setSubmitError] = useState("");

  const initialValues: FormValues = { name: "", email: "", message: "" };

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", ...values }),
      });
      setSubmitted();
      actions.resetForm();
    } catch (e) {
      setSubmitError("Something went wrong.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const messageLength = values.message.length;

  const messageLengthHint = () => {
    if (messageLength > 0 && messageLength <= MAX_MESSAGE_LENGTH) {
      return (
        <span className="float-right">
          {messageLength} / {MAX_MESSAGE_LENGTH}
        </span>
      );
    }

    if (messageLength > MAX_MESSAGE_LENGTH) {
      return (
        <span className="float-right">
          A lot to say? Send me an{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline"
            href="mailto:benjohn.carter@gmail.com"
          >
            email
          </a>
        </span>
      );
    }

    return null;
  };

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
      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Leonard"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errorCondition={Boolean(errors.name && touched.name)}
          />
          {errors.name && touched.name && <ErrorMessage error={errors.name} />}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="lmccoy@enterprise.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorCondition={Boolean(errors.email && touched.email)}
          />
          {errors.email && touched.email && (
            <ErrorMessage error={errors.email} />
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <Label htmlFor="message">
            Message
            {messageLengthHint()}
          </Label>
          <TextArea
            id="message"
            value={values.message}
            placeholder="Damn it Jim, I'm a doctor not a form field."
            errorCondition={Boolean(errors.message && touched.message)}
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
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  return (
    <Layout title="Contact">
      <Column>
        {submitted ? (
          <SubmitMessage />
        ) : (
          <ContactForm setSubmitted={handleSubmit} />
        )}
      </Column>
    </Layout>
  );
};

export default Contact;
