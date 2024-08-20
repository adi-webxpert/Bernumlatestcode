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
                <h2>Design & Marketing For Forward-Thinking Businesses</h2>
                <p>
                  Bernum knows what makes you stand out and will use that
                  distinction to turn what makes you unique into something
                  unforgettable! With thousands of clients under our wing and
                  counting, Bernum is the go-to choice for business visionaries
                  everywhere!
                </p>
                <div className="features-text">
                  <p>
                    At Bernum, we understand that visual experience speaks
                    volumes about a brand. It conveys your narrative, stirs
                    emotions and helps connect with potential customers -
                    something our skilled graphic designers excel at creating.
                    They can give your current brand an overhaul as well, with
                    special care taken in creating a uniform appearance and
                    aesthetic. At our company, we provide professional graphic
                    design services in all categories ranging from company logo
                    and website creation, business cards, flyers, brochures,
                    image ads catalogs book covers and much more. Your graphic
                    represents your first impression; conveying what your
                    business represents while leaving a lasting impactful memory
                    of itself in people's minds. All aspects of marketing build
                    from this foundational piece. Our dream team of marketing
                    and graphic design agency professionals can custom craft an
                    appealing brand identity from scratch!
                  </p>
                </div>
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
                <p>
                  Every successful business has a unique visual identity. Our
                  graphic designers can craft the right one for you by offering
                  clean, trendy, and aesthetically appealing design options for
                  marketing collateral that help deliver the right message to
                  your audience, boost customer retention, and encourage
                  brand-led growth while keeping the brand value intact.
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
                <p>
                  The major benefit of graphic design for businesses is that it
                  helps in establishing a visual identity for the brand, which
                  is a reflection of the company’s values and goals.
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
                <p>
                  Graphic designs help in effective communication with the
                  viewers, as visual aids are better at communicating ideas.
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
                <p>
                  Graphic design helps to create a professional brand image.
                  This professional image helps in building trust and
                  credibility in the minds of the customers.
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
                <p>
                  The key benefit of graphic design for businesses is that it
                  can help gain high visibility, which in turn can result in
                  higher conversions.
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
                <p>
                  Your graphic is like your impression, conveying what you’re
                  about and creating an impression that will last a lifetime.
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
