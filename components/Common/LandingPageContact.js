import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import services from "../../services/contact/contactServices";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "yup-phone";
import ReCAPTCHA from "react-google-recaptcha";

import { GOOGLE } from "../../configs/constant.config";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message  successfully sent and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  emailFrom: "",
  phone: "",
  subject: "",
  bodyText: "",
};

const siteKey = GOOGLE.RECAPTCH_SITE_KEY;
const LandingContactForm = ({ pcontent, readmoreContent }) => {
  const [read, setRead] = useState(false);
  const router = useRouter();
  const handleRead = () => {
    setRead(!read);
  };
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const captchaRef = useRef();
  const [contact, setContact] = useState(INITIAL_STATE);
  const [loader, setLoader] = useState(false);
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(7, "Enter at least 5 characters")
      .required("Name is required"),
    emailFrom: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),

    subject: yup.string().required("Subject is required"),
    message: yup
      .string()
      .required("Message cannot be empty")
      .min(10, "Enter at least 10 characters")
      .max(240, "Maximum characters allowed: 500"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleSendEmail = async (data) => {
    captchaRef.current.reset();
    const formdata = {
      from: data.emailFrom,
      subject: data.subject,
      message: data.message,
      phone: data.phone,
      name: data.name,
      recaptchaValue,
    };
    setLoader(true);
    try {
      const response = await services.sendEmail(formdata);
      if (response.status) {
        // alertContent();
        reset();
        setLoader(false);
        router.push("/thankyou");
      }
      reset();
    } catch (e) {
      MySwal.fire({
        title: "Error!",
        text: "Error while submiting the form",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      setLoader(false);
    }
    setContact(INITIAL_STATE);
  };

  const handleRecaptcha = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="contact-area pb-100 mt-20">
      <div id="contactWithUs"></div>
      <div className="container ">
        <Container maxWidth="md" className="text-center">
          <h2 class="text-3xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Start Your 
            <span style={{ color: "rgb(245, 153, 72)" }}> Growth </span>Journey
            Today
          </h2>
        </Container>

        <div className="row mb-3.5  mt-4">
          <div className="col-lg-6 col-md-12">
            <div className="contact-image" data-tilt>
              <img src="/images/contactUs.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit(handleSendEmail)}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control"
                        {...register("name")}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.name?.message}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                        {...register("emailFrom")}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.emailFrom?.message}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="form-control"
                        {...register("phone")}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.phone?.message}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        {...register("subject")}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.subject?.message}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Your Message"
                        cols="30"
                        rows="5"
                        className="form-control"
                        {...register("message")}
                      />
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors.message?.message}
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <ReCAPTCHA
                      sitekey={siteKey}
                      onChange={handleRecaptcha}
                      ref={captchaRef}
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    {loader ? (
                      <span>
                        <i class="bx bx-loader bx-spin bx-md"></i>
                      </span>
                    ) : (
                      <button type="submit" className="default-btn">
                        Send Message
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContactForm;
