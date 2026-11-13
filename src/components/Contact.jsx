import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) errors.message = "Please write a message.";
  return errors;
}

function Contact() {
  const [formValues, setFormValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
    setIsSubmitted(false);
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    
      setIsSubmitted(true);
      setFormValues(EMPTY_FORM);
    }
  };

  const renderField = (name, label, type = "text") => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formValues[name]}
        onChange={handleChange}
        aria-invalid={Boolean(errors[name])}
      />
      {errors[name] && <p className="field__error">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact__inner">
        <SectionTitle eyebrow="Get in touch" title="Contact Me" />
        <p className="contact__lead">
          Have a question or want to work together? Send me a message
          {personalInfo.location ? ` — I'm based in ${personalInfo.location}.` : "."}
        </p>

        <form className="card contact__form" onSubmit={handleSubmit} noValidate>
          {renderField("name", "Name")}
          {renderField("email", "Email", "email")}
          {renderField("subject", "Subject")}

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <p className="field__error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn--primary">
            Send Message
          </button>

          {isSubmitted && (
            <p className="form-success" role="status">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
