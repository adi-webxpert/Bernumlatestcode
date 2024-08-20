import React from "react";
import Head from "next/head";

import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/AboutUs/AboutContent";
import TestimonialStyleTwo from "../components/Common/TestimonialStyleTwo";
import Footer from "../components/_App/Footer";

const Thankyou = () => {
  return (
    <>
      <Head>
        <title>Thank you | Bernum</title>
        <meta name="description" content="about us" />
        <meta name="keywords" content="about us" />
      </Head>
      <NavbarStyleTwo />

      <PageBanner pageTitle="Thank You! " />
      <div className="thankyou-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="thankyou-content">
                <div className=" text-center ">
                   <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
                    <b>
                      - Thank you for choosing Bernum as your trusted partner in
                      web development.
                    </b>
                  </p>
                   <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
                    <b>
                    We appreciate your interest in our
                      services. Our dedicated team will connect with you soon.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thankyou;
