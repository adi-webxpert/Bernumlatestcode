import React from "react";
import Link from "next/link";

const StartProjectWithUs = () => {
  return (
    <div className="project-start-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="project-start-image">
              <img src="/images/project-start1.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="project-start-content">
              <span className="sub-title">Start Your Free Consultation Now</span>
              <h2>
              Your Website Is the Gateway to Reaching Your Target Audience Online
              </h2>
              <p>
                At our web design agency, we specialise in crafting
                premium website designs to serve the goals of our clients'
                businesses, whether that is lead generation, increasing exposure
                or streamlining operations more smoothly. Our world-class web
                design team can achieve all these objectives for you. Simply
                hire the professionals from us at an economical price and start
                an online presence now.
              </p>

              <Link href="/contact">
                <a className="default-btn">Get Started</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape2">
        <img src="/images/shape/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape/shape3.png" alt="image" />
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
      <div className="shape13">
        <img src="/images/shape/shape13.png" alt="image" />
      </div>
    </div>
  );
};

export default StartProjectWithUs;
