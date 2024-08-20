import React from "react";
// import Contact from "../contact/page";
import { Container, Grid } from "@mui/material";
export default function LandingPageTestimonial() {
  return (
    <div className="test-sec mt-36 align-center">
      <Container maxWidth="lg">
        <div className="team-head  grid justify-center item-center">
          <h2 className="text-2xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            We're
            <span style={{ color: "rgb(245, 153, 72)" }}> Awarded </span> as Top
            Digital Marketing Agency
          </h2>
        </div>
        <div className="container  testimonial flex justify-between gap-4 pt-20 item-center px-7">
          <div className="row justify-center mx-6 mt-12">
            <div className=" col-lg-2 col-md-6 col-sm-12 col-xs-12 text-center bg-rose-100 ">
              <div className="mt-5 flex justify-center">
                <img src="../images/awarded.jpeg" />
              </div>
              <div className="grid align-center item-center  mb-7">
                <h6 className="my-4">
                  <b> Fit For All Types of Businesses</b>
                </h6>
                <p>Top Digital Marketing Agency</p>
              </div>
            </div>
            <div className=" col-lg-2 col-md-6 col-sm-12 col-xs-12 text-center bg-rose-100 ">
              <div className="mt-5 flex justify-center">
                <img src="../images/awarded8.jpeg" />
              </div>
              <div className="grid align-center item-center  mb-7">
                <h6 className="my-4">
                  <b>Fit For All Types of Businesses</b>
                </h6>
                <p>Top Digital Marketing Agency</p>
              </div>
            </div>
            <div className=" col-lg-2 col-md-6 col-sm-12 col-xs-12 text-center bg-rose-100 ">
              <div className="mt-5 flex justify-center">
                {" "}
                <img src="../images/awarded3.jpeg" />
              </div>
              <div className="grid align-center item-center  mb-7">
                <h6 className="my-4">
                  <b>Fit For All Types of Businesses</b>
                </h6>
                <p>Top Digital Marketing Agency</p>
              </div>
            </div>
            <div className=" col-lg-2 col-md-6 col-sm-12 col-xs-12 text-center bg-rose-100 ">
              <div className="mt-5 flex justify-center">
                {" "}
                <img src="../images/awarded.jpeg" />
              </div>
              <div className="grid align-center item-center  mb-7">
                <h6 className="my-4">
                  <b>Fit For All Types of Businesses</b>
                </h6>
                <p>Top Digital Marketing Agency</p>
              </div>
            </div>
            <div className=" col-lg-2 col-md-6 col-sm-12 col-xs-12 text-center bg-rose-100 ">
              <div className="mt-5 flex justify-center">
                {" "}
                <img src="../images/awarded8.jpeg" />
              </div>
              <div className="grid align-center item-center  mb-7">
                <h6 className="my-4">
                  <b>Fit For All Types of Businesses</b>
                </h6>
                <p>Top Digital Marketing Agency</p>
              </div>
            </div>
            <div className=" col-lg-2 col-md-6 col-sm-12 col-xs-12 text-center bg-rose-100 ">
              <div className="mt-5 flex justify-center">
                {" "}
                <img src="../images/awarded3.jpeg" />
              </div>
              <div className="grid align-center item-center mb-7">
                <h6 className="my-4">
                  <b>Fit For All Types of Businesses</b>
                </h6>
                <p>Top Digital Marketing Agency</p>
              </div>
            </div>
          </div>
        </div>

        <p id="contact"></p>
      </Container>
    </div>
  );
}
