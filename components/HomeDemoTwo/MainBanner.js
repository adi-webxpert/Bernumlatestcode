import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainBanner = () => {
  const matches = useMediaQuery("(max-width:724px)");

  const options = {
    showArrows: matches,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    autoPlay: true,
    interval: 5000, // Adjust the autoplay interval as needed
    stopOnHover: true,
    transitionTime: 500, // Adjust the transition time as needed
    preventMovementUntilSwipeScrollTolerance: matches,
    swipeScrollTolerance: 50,
  };
  return (
    <>
      <link href="https://www.bernum.ca/" rel="canonical" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.bernum.ca" />
      <meta
        property="og:image"
        content="http://bernum.ca/images/main-logo.png"
      />
      <meta property="og:site_name" content="Bernum" />
      <meta
        property="og:title"
        content="Leading Website Development and Design Company in Canada - Bernum"
      />
      <meta
        property="og:description"
        content="Are you in search of the top Website Development and Design Company in Canada? Specializing in delivering superior solutions for your business requirements. Offering custom web design and development services. Request a quote now."
      />
      <div className="home-wrapper-area">
        <div className="container-fluid">
          <Carousel {...options}>
            <div className="single-banner-item">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="banner-content">
                    <span className="sub-title">Grow Online</span>
                    <h2>We Provide Best Web Design and Development Services</h2>
                    <p>
                    Bernum has helped many businesses excel by creating their online presence with creative, fast, AI driven software development, responsive web design and development solutions.
                    </p>

                    <div className="btn-box">
                      <div className="d-flex align-items-center">
                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    <img src="/images/home/banner1.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="single-banner-item">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="banner-content">
                    <span className="sub-title">Sell More</span>
                    <h2>Get A Complete Digital Marketing Solutions.</h2>
                    <p>
                      We have a big team of digital marketing professionals
                      dedicated to creative and results-driven web-based
                      solutions using the latest trends and technologies.
                    </p>

                    <div className="btn-box">
                      <div className="d-flex align-items-center">
                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    <img src="/images/home/banner2.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="shape1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/shape/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape/shape4.png" alt="image" />
        </div>
        <div className="shape5">
          <img src="/images/shape/shape5.png" alt="image" />
        </div>
        <div className="shape6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="shape7">
          <img src="/images/shape/shape7.png" alt="image" />
        </div>
        <div className="shape8">
          <img src="/images/shape/shape8.png" alt="image" />
        </div>
        <div className="shape13">
          <img src="/images/shape/shape13.png" alt="image" />
        </div>
        <div className="shape14">
          <img src="/images/shape/shape14.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
