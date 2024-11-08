import React from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Pricing from "../components/Common/Pricing";
import StartProjectWithUs from "../components/Common/StartProjectWithUs";
import Head from "next/head";

const GraphicDesign = () => {
  return (
    <>
      <Head>
        <title>Top Graphic Design Services by Bernum | Design Agency</title>
        <link href="https://www.bernum.ca/graphic-design/" rel="canonical" />

        <meta
          name="description"
          content="Bernum graphic design agency solves all your graphic design needs. We 
provide quality, reliable and affordable graphic design services. Contact now."
        />
        <meta
          name="keywords"
          content="graphic design services, graphic design services vancouver, graphic design companies toronto, graphic design agency, design graphic agency, graphic design companies calgary"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.bernum.ca/graphic-design/"
        />
        <meta
          property="og:image"
          content="http://bernum.ca/images/main-logo.png"
        />
        <meta property="og:site_name" content="Bernum" />
        <meta
          property="og:title"
          content="Top Graphic Design Services by Bernum |  Design Agency"
        />
        <meta
          property="og:description"
          content="Bernum graphic design agency solves all your graphic design needs. We provide quality, reliable and affordable graphic design services. Contact now."
        />
      </Head>
      <NavbarStyleTwo />

      <PageBanner pageTitle="Professional Graphic Design Services" />

      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Digital Marketing</span>
                <h2 >Design & Marketing For Forward-Thinking Businesses</h2>
                <p className="parachange">
                  Currently Bernum Technologies delivers unmatched professional
                  <b>
                    {" "}
                    <a href="https://www.bernum.ca/graphic-design/">
                      graphic design services
                    </a>
                  </b>{" "}
                  to ensure your business gets noticed. Because our talented
                  team of designers knows that visual appeal is powerful,
                  telling the story you want your potential customers to hear.
                  Whether you require a captivating logo to represent your
                  brand, beautiful website graphics, business cards, fliers, or
                  any other item that can help develop corporate image, then our
                  graphic designing services in Vancouver have it all under one
                  roof. We pay attention to uniformity in visual design so that
                  your brand can be easily recognizable and remembered. It is
                  our pleasure to support you in making a powerful first
                  impression through excellent graphics, designs, and layouts in
                  your business!
                </p>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img
                  src="/images/services/graphic-designer-1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src="/images/services/graphic-design-2.jpg" alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Social Media Marketing</span>
                <h2>Solution for Creative Graphic Design</h2>
                <p className="parachange" >
                  Having a unique visual identity is very important for every
                  successful business organization. Our{" "}
                  <b>
                    <a href="https://www.bernum.ca/graphic-design/">
                      graphic design agency
                    </a>
                  </b>{" "}
                  provides fresh, clean and stylish designs to meet our client’s
                  marketing material needs. We assist you in achieving your
                  company objectives of communicating your message, increasing
                  customer loyalty, and supporting The brand-led objectives, all
                  at the same time preserving your brand essence. Graphic
                  designers at our company collaborate with you to design a
                  suitable image that your target market can easily relate to in
                  today’s diverse market. It is time to amplify your website
                  with our professional design services!
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Branding
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Logo Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Business Card
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Flyer Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Banner Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Poster Design
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Digital Marketing</span>
            <h2>Perfect Creative Solutions</h2>
            <p>
              We have delivered immaculate design solutions to hundreds of our
              clients worldwide and have received great feedback.
            </p>
          </div>

          <div className="row">
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-content"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Informative Content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div> */}

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-darts"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Brand Recognition</h3>
                <p className="parachange">
                  The primary advantage of graphic design for businesses lies in
                  its ability to establish a distinct visual identity that
                  reflects the company’s core values and objectives. A
                  well-crafted visual identity enhances brand recognition,
                  builds trust with customers, and communicates the essence of
                  your brand effectively.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-bar-chart"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Communication</h3>
                <p className="parachange">
                  Graphic design plays a crucial role in effective
                  communication, as visual aids significantly enhance the
                  ability to convey ideas. By utilizing compelling imagery,
                  businesses can capture attention and make complex concepts
                  more digestible for viewers. Effective graphic design not only
                  improves understanding but also fosters emotional connections,
                  leading to greater engagement and retention of information.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-megaphone"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Building Trust and Goodwill</h3>
                <p className="parachange">
                  Graphic design is essential for creating a professional brand
                  image that fosters trust and credibility among customers. A
                  well-executed design not only enhances visual appeal but also
                  communicates reliability and expertise, making it easier for
                  potential clients to connect with your brand.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-link"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Higher conversions</h3>
                <p className="parachange">
                  One of the key benefits of graphic design for businesses is
                  its ability to enhance visibility, leading to increased
                  conversions. A strong visual identity captures attention and
                  makes a lasting impression on potential customers.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-reputation"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Good Impression</h3>
                <p className="parachange">
                  Your graphic design is your first contact with the audience
                  and reflects what your brand stands for. It tells people who
                  you are and it gets imprinted on their mind. Graphic design
                  gets the attention because it is a key marketing strategy that
                  makes sure that your business brand is well understood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <StartProjectWithUs />

      <Footer />
    </>
  );
};

export default GraphicDesign;
