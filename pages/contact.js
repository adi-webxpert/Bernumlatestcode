import React from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ContactForm from "../components/Contact/ContactForm";
import Head from "next/head";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Bernum</title>
        <meta name="description" content="contact us" />
        <meta name="keywords" content="contact us" />
      </Head>
      <NavbarStyleTwo />

      <PageBanner pageTitle="Contact Us" />

      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="back-icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <div className="icon">
                                    <i className='bx bx-map'></i>
                                </div>
                                <h3>Our Address</h3>
                                <p>135 Radcliffe Dr, Kitchener , ON N2E 2H5</p>
                            </div>
                        </div> */}

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contact</h3>
                <p>Phone: +1 5195050065</p>
                <p>
                  E-mail:
                  <a href="mailto:support@bernum.ca"> support@bernum.ca</a>
                </p>

                <p>
                  Address:
                  <a> 135 Radcliffe Drive, Kitchener, Ontario, N2E 2H5</a>
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 offset-lg-0">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 20:00</p>
                <p>Sunday & Saturday: 10:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
