import React from "react";
import Link from "next/link";

const FeaturedService = () => {
  return (
    
    <div className="boxes-area pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-boxes-box">
              <div className="icon">
                <i className="flaticon-speed"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                </div>
              </div>
              <h3>
                <Link href="/web-development">
                  <a>Web Development</a>
                </Link>
              </h3>
              <p>
                No matter if you are an entrepreneur searching for an
                accessible, budget-conscious website to launch their start-up or
                an experienced business professional looking for an innovative,
                cutting-edge website to showcase the achievements of a Fortune
                500 company.
              </p>

              <Link href="/web-development">
                <a className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More
                  <i className="right-icon flaticon-next-button"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-boxes-box">
              <div className="icon">
                <i className="flaticon-research"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                </div>
              </div>
              <h3>
                <Link href="/digital-marketing">
                  <a>Digital Marketing</a>
                </Link>
              </h3>
              <p>
                Are you in need of assistance developing your brand identity and
                target market audience? This package offers collaborative
                brainstorming of marketing initiatives and strategic planning
                for branding/identity development with digital marketing
                solutions included.
              </p>

              <Link href="/digital-marketing">
                <a className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More
                  <i className="right-icon flaticon-next-button"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
            <div className="single-boxes-box">
              <div className="icon">
                <i className="flaticon-email-marketing"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                </div>
              </div>
              <h3>
                <Link href="/graphic-design">
                  <a>Graphic Design</a>
                </Link>
              </h3>
              <p>
                Graphic Design & Branding services offered by us ensure 100%
                customer satisfaction. Let us bring your brand to life through
                visually striking premium graphics - so that every first
                impression counts!
              </p>

              <Link href="/graphic-design">
                <a className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More
                  <i className="right-icon flaticon-next-button"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
