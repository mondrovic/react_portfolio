import React from "react";
import "../../App.css";
import "../css/Hero.css";
import "../css/Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Products() {
  // state handler for form submission
  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // gather data for form submission
  const submitData = async (data) => {
    try {
      const messageParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_SERVICE_TEMPLATE,
        messageParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="hero-container">
      <div className="form-container">
        <h1>Contact Me</h1>
        <div className="ContactForm">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit(submitData)}
                    noValidate
                  >
                    {/* Row 1 of form */}
                    <div className="row form-row">
                      <div className="col-6">
                        <input
                          type="text"
                          name="name"
                          ref={register({
                            required: {
                              value: true,
                              message: "Please input your name",
                            },
                            maxLength: {
                              value: 20,
                              message: "Please use 20 characters or less",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Your name"
                        ></input>
                        {/* If error then display error message */}
                        {errors.name && (
                          <span className="errorMessage">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          name="email"
                          // validates email with regex expression
                          ref={register({
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          className="form-control formInput"
                          placeholder="Email address"
                        ></input>
                        {/* If error then display error message */}
                        {errors.email && (
                          <span className="errorMessage">
                            Please enter a valid email address
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className="row form-row">
                      <div className="col">
                        <input
                          type="text"
                          name="subject"
                          ref={register({
                            required: {
                              value: true,
                              message: "Please enter a subject",
                            },
                            maxLength: {
                              value: 50,
                              message: "Subject cannot exceed 50 characters",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Subject"
                        ></input>
                        {/* If error then display error message*/}
                        {errors.subject && (
                          <span className="errorMessage">
                            {errors.subject.message}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className="row form-row">
                      <div className="col">
                        <textarea
                          rows={3}
                          name="message"
                          ref={register({ required: true })}
                          className="form-control formInput"
                          placeholder="Type your message here."
                        ></textarea>
                        {errors.message && (
                          <span className="errorMessage">
                            Please enter a message.
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="submit-btn" type="submit">
                      Send
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
