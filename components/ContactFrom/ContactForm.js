import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/your-email@example.com";

    Object.entries(forms).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    // try {
    //   const formUrl = "https://formsubmit.co/cakorete@mailgolem.com";

    //   const response = await fetch(formUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(forms),
    //   });
    //   console.log({response})

    //   if (response.ok) {
    //     alert("Form submitted successfully!");
    //     setForms({
    //       name: "",
    //       email: "",
    //       phone: "",
    //       subject: "",
    //       message: "",
    //     });
    //   } else {
    //     alert("Something went wrong. Please try again.");
    //   }
    // } catch (e) {
    //   console.log("error");
    // }

    // if (validator.allValid()) {
    //   validator.hideMessages();
    //   setForms({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     phone: "",
    //     message: "",
    //   });
    // } else {
    //   validator.showMessages();
    // }
  };

  return (
    <form
     method="POST" action="https://formsubmit.co/fiazulhaq291@gmail.com" enctype="multipart/form-data"
      className="contact-validation-active"
    >
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Name"
            />
            {validator.message("name", forms.name, "required|alpha_space")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your Email"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              value={forms.phone}
              type="phone"
              name="phone"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Your phone"
            />
            {validator.message("phone", forms.phone, "required|phone")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <select
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.subject}
              type="text"
              name="subject"
            >
              <option>Choose a Service</option>
              <option>Web Design</option>
              <option>Web Development</option>
              <option>Marketing</option>
            </select>
            {validator.message("subject", forms.subject, "required")}
          </div>
        </div>
        <div className="col col-lg-12 col-12">
          <textarea
            onBlur={(e) => changeHandler(e)}
            onChange={(e) => changeHandler(e)}
            value={forms.message}
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn">
          Submit Now
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
