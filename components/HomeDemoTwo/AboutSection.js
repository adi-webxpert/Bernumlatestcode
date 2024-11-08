import React from "react";
import Link from "next/link";
import { Head } from "next/document";

const AboutSection = () => {
  return (
    <div className="about-area pb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-img">
              <img src="/images/about-img2.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="text">
                <span className="sub-title">About Us</span>
                <h1>Web Design and Web Development Company</h1>
                <p className="parachange">
                  At our top-rated website design company in Canada, our
                  creative and results-driven solutions focus on results-driven
                  web solutions for you and your brand. Let our services bring
                  your company front and center by helping provide support, sell
                  products or promote it online. Our web design services have an
                  established track record in creating successful websites. Our
                  firm excels at crafting innovative online business models,
                  brand-friendly websites, robust direct response tactics and
                  ingenious marketing strategies that drive hyper-growth for our
                  clients. We've had the honor of working with companies across
                  industries. We are ready to put our expertise to work for your
                  digital project. Bernum understands the value of being a
                  client-first digital agency that places an emphasis on
                  building long-term relationships, providing excellent customer
                  service, and creating cutting-edge web-based solutions. We
                  employ expert Web Designers and SEO Marketing Specialists.
                </p>

                <ul className="funfacts-list">
                  <li>
                    <div className="list">
                      <i className="flaticon-menu-1"></i>
                      <h3>376</h3>
                      <p>Completed projects</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <i className="flaticon-web-settings"></i>
                      <h3>7548</h3>
                      <p>Working hours were spent</p>
                    </div>
                  </li>
                  <li>
                    <div className="list">
                      <i className="flaticon-conversation"></i>
                      <h3>350</h3>
                      <p>Expert team members</p>
                    </div>
                  </li>
                </ul>

                <Link href="/about-us">
                  <a className="default-btn">More About Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape15">
        <img src="/images/shape/shape15.png" alt="image" />
      </div>
    </div>
  );
};

export default AboutSection;
