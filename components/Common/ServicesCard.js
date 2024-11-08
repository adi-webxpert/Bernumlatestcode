import React from "react";
import Link from "next/link";

const ServicesCard = () => {
  return (
    <div className="services-area bg-f9f9f9 pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Services</span>
          <h2>Let's Check Our Services</h2>
          <p>
            Need a quote on a development & design or a new project? Please give
            us some details on your project and let us help!
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-megaphone"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                  <div className="circle-two"></div>
                </div>
              </div>
              <h3>
                <Link href="/web-development">
                  <a>Web Development</a>
                </Link>
              </h3>
              <p className="parachange">
                No matter if you are an entrepreneur searching for an
                accessible, budget-conscious website to launch their start-up or
                an experienced business professional looking for an innovative,
                cutting-edge website to showcase the achievements of a Fortune
                500 company.our dedicated team can work alongside you to craft
                the site of your dreams on schedule and within your budget.
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
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-keywords"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                  <div className="circle-two"></div>
                </div>
              </div>
              <h3>
                <Link href="/web-development">
                  <a>Mobile Development</a>
                </Link>
              </h3>
              <p className="parachange">
                We specialise in mobile application development services. With
                individual attention paid to each of our customer satisfactions,
                we bring your brand to life through unique premium mobile
                applications that will have your customers overjoyed! You can
                rest assured that their experience with us will exceed all
                expectations!
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
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-content-management"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                  <div className="circle-two"></div>
                </div>
              </div>
              <h3>
                <Link href="/web-design">
                  <a>Web Design</a>
                </Link>
              </h3>
              <p className="parachange">
                Our creative web design services can help your business to
                improve its identity in the online marketplace. By blending
                style and technology together, our expertise enables your
                business to flourish on the Web.
              </p>

              <Link href="/web-design">
                <a className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Learn More
                  <i className="right-icon flaticon-next-button"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-ppc"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                  <div className="circle-two"></div>
                </div>
              </div>
              <h3>
                <Link href="/graphic-design">
                  <a>Graphic Design</a>
                </Link>
              </h3>
              <p className="parachange">
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

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-competitor"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                  <div className="circle-two"></div>
                </div>
              </div>
              <h3>
                <Link href="/web-development">
                  <a>Software Testing</a>
                </Link>
              </h3>
              <p className="parachange">
                Provide one-stop software development solutions. Our dedicated
                engineering team specializes in developing fast-growing tech
                softwares that our users love!
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
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-startup"></i>
                <div className="circles-box">
                  <div className="circle-one"></div>
                  <div className="circle-two"></div>
                </div>
              </div>
              <h3>
                <Link href="/digital-marketing">
                  <a>Digital Marketing</a>
                </Link>
              </h3>
              <p className="parachange">
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
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
