import React, { useState } from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";

import PageBanner from "../components/Common/PageBanner";

// import Contact from "../contact/page";
import { Container, Grid } from "@mui/material";
import Footer from "../components/_App/Footer";
import LandingContactForm from "../components/Common/LandingPageContact";
import LandingPageBanner from "../components/Common/LandingPageBanner";
import LandingPageTestimonial from "../components/Common/LandingPageTestimonial";

import Head from "next/head";
function CompanyMarkham() {
  const [value, setValue] = useState("1");
  const [read, setRead] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRead = () => {
    setRead(!read);
  };
  return (
    <>
      <Head>
        <title>Best Web Design Packages | 100% Satisfaction - Bernum</title>
        <meta
          name="description"
          content="Transform Your Online Presence with Bernum's Top-Notch Web Design Packages in Canada. Elevate Your Website With Us Today"
        />

        <link
          href="https://www.bernum.ca/web-design-packages/"
          rel="canonical"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.bernum.ca/web-design-packages/"
        />
        <meta
          property="og:image"
          content="http://bernum.ca/images/main-logo.png"
        />
        <meta property="og:site_name" content="Bernum" />
        <meta
          property="og:title"
          content="Best Web Design Packages | 100% Satisfaction - Bernum"
        />
        <meta
          property="og:description"
          content="Transform Your Online Presence with Bernum's Top-Notch Web Design Packages in Canada. Elevate Your Website With Us Today"
        />
        <meta name="keywords" content="Web Design Packages" />
      </Head>
      <NavbarStyleTwo />

      <LandingPageBanner pageTitle="Web Design Packages " />

      {/* tabs */}
      <div className=" container tabs-three">
        <div className="row justify-center mx-6 mt-12">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              A strong initial step toward having a powerful condition on the
              internet is having an aesthetic website. Just like your business
              card, your website is the first touch point that any customer
              associates with your brand and at Bernum we know the power of a
              first perception. The creation of this company’s specialty lies in
              the development of unique business and custom websites with the
              appropriate appeal. They are really unique and developed to target
              specific needs of web site owners, so all our{" "}
              <a className="seo-links" href="https://bernum.ca/web-design/">
                <b> web design packages</b>{" "}
              </a>
              will help to improve your business and reflect your brand
              identity. Experience Bernum’s professionalism in delivering a site
              that not only will look marvelous but is marvelous in day-to-day
              usage in today’s world.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              High importance of web presence is seen in the contemporary world
              where globalization of the markets is evident. Our web design
              packages at Bernum use both imagination and ideas on new age
              technologies to ensure that your business gets the image it
              deserves online. This is why we do not take the creation of the
              first impression lightly, which is why we ensure that our website
              designs will make an impact on every client. No matter if you need
              a business-like web target or an inviting digital storefront, our
              tailored web designs guarantee that your Website gets seen and
              gets real results. When it comes to the best services in website
              design you can count on Bernum to get a website that re-energizes
              your brand and energizes your audience.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum provides our clients with <b>package website design </b>{" "}
              depending on their needs irrespective of the business stage they
              are in. Whether you are a new company or a large corporation, our
              offers are created considering your financial capabilities and
              goals. Contact our talented professionals and let us create a
              professional, fully functional website for you. Our made-to-order
              recommendations guarantee your website meets all your
              expectations, and offer workable solutions for growth. Let Bernum
              assist you in pushing your business further with a web design
              service that meets your objective, thus achieving optimum results
              online.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum’s web design packages offer the best solutions because of
              two aspects that remain clear to us: quality and innovation. Of
              course, each business is individual and that is why we design
              individual websites that would accurately convey your brand and
              its goals and target audience. Our capable designers work with you
              directly to evaluate the product and guarantee that not only the
              appearance but the usability as well suits you most. Our web
              design packages are versatile enough to provide you with a basic
              site or a ground up fully functional multifaceted platform that
              will keep your business on track for success and retain users for
              further use.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum offers affordable web design packages for your business to
              incorporate and reach more audiences, capture more leads and make
              sales on your websites. Website construction is our priority, but
              our work is much more than that: we’re about delivering engaging
              online environments tailored towards reaching your customers. All
              packages come with the aim of assisting you and your brand to cut
              through the clutter in today’s digital economy by providing more
              than just functional, attractive, and user-friendly websites that
              are key to future continuity and profitability. Leave your website
              in the hands of Bernum to design a business attracting site that
              keeps customers coming for more in the long-run.
            </p>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div>
        <div className="lg:text-center mt-36 why-choose-sec">
          <Container maxWidth="md">
            <h2 className="text-3xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Why Choose <span style={{ color: "rgb(245, 153, 72)" }}> Us</span>
              ?
            </h2>
          </Container>
        </div>
        <div className="mt-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-rose-500 p-3 shadow-lg">
                      <svg
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM224 64c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C145.5 152.1 129 192 96 192c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C168.1 286.5 208 303 208 336c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C302.5 263.9 319 224 352 224c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C279.9 129.5 240 113 240 80c0-8.8-7.2-16-16-16zm-24 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Comprehensive Solutions
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our customized web design packages can meet the diverse
                    requirements of businesses by providing all-encompassing
                    solutions that cater specifically to them.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg"></span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Customized Designs
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    We understands that each business is unique, which is why
                    our packages include custom web designs to best match their
                    company culture and personality.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-rose-500 p-3 shadow-lg">
                      <svg
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Responsive Design
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    When purchasing one of our web design packages, our expert
                    designers guarantee your website will offer smooth user
                    experiences across devices for its audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    SEO Optimisation
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At our firm, we include essential SEO components in each
                    package we deliver in order to increase website visibility
                    and search engine ranking.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="white"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    User-Friendly Navigation
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our designs are focused on the user experience and making
                    navigation intuitive and engaging for our guests.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        height="1em"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 576 512"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    E-Commerce Solutions
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    If your business would like to sell products online, our web
                    design packages include an e-commerce system.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        className="h-8 w-8 text-white"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Content Management Systems (CMS)
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our packages incorporate Content Management Systems for
                    effortless website updates and management, giving you
                    complete control of its contents without needing to switch
                    applications or manually make updates. This enables seamless
                    changes.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 384 512"
                        fill="white"
                        className="h-8 w-8 text-white"
                      >
                        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Mobile Compatibility
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At our agency, we take great pride in making sure your
                    website is compatible with mobile users, accounting for the
                    ever-increasing population of smartphone owners.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        fill="white"
                        className="h-8 w-8 text-white"
                      >
                        <path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Speed and Performance
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our packages focus on optimizing website speed and
                    performance to reduce bounce rates while increasing user
                    engagement.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        fill="white"
                        className="h-8 w-8 text-white"
                      >
                        <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Ongoing Support
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At Website Development Services, our specialty lies in
                    ongoing website maintenance and support to keep it current,
                    secure, and updated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div className=" container tabs-three mt-20 ">
        <h2 className="text-4xl text-center font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          <span style={{ color: "rgb(245, 153, 72)" }}> About </span> Bernum
        </h2>
        <div className="row justify-center mt-12 mx-6">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              At Bernum, <b> Mobile-Friendly web design </b> is our passion and
              we pride ourselves on offering affordably priced web design
              services that can be viewed through our web design packages. We
              pride ourselves as a team of professional web designers dedicated
              to working hand in hand with you to come up with packages that fit
              your needs best and those which would appeal most to you to get an
              Addressed audience. We also enjoy the opportunity to create
              beautiful and well-optimized website design for our clients.
              Whether you are a brand new company or an established one, our
              complete package of web designs gives you the instruments
              necessary to succeed in today’s business world. Bernum can assist
              you to shine online and succeed with a website that works.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum’s web design packages are features exclusively for business
              websites, regardless of whether you are a new business just
              starting your website or an established business that is in the
              process of redesigning. Our packages are for all industries and as
              much as possible we provide tailored packages for packages to fit
              any business environment. Our emphasis on creativity, technical
              know-how, and detail guarantees that your website will not just
              look great but will also function great no matter which device or
              screen it’s being viewed on. If you need your business brand to
              soar high, why not choose Bernum for the best of services to make
              your business website all you need
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum’s Web Design Packages provide organizations with a
              versatile, easy to manage website framework that effectively
              supports the overall image of their business and boosts its
              performance within a thriving market society. Focused firmly on
              designing innovative and user friendly, these packages are
              developed especially to fit your business exact requirement thus
              providing unique functionality added to the ease of use of the
              website you have developed.
              <a className="seo-links" href="https://www.bernum.ca/contact/">
                <b> Contact us today </b>
              </a>{" "}
              to find out how Bernum can assist you in achieving a higher online
              visibility, while greatly increasing your sales with a unique
              built-for-you, high impact website!
            </p>
          </div>
        </div>
      </div>

      {/* testimonials sec */}
      <LandingPageTestimonial />
      <div className=" container contact-des ">
        <div className="mb-6 max-w-2xl text-center md:mx-auto md:mb-12 xl:max-w-none mt-20">
          <h2 className="text-3xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Contact<span style={{ color: "rgb(245, 153, 72)" }}> Us </span>{" "}
          </h2>
        </div>
        <div className="row justify-center mx-6 mt-12">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Finally, it is important to know that Bernum’s web design packages
              are what you call flexible and created to answer the needs and
              objectives of the company. We design successful online presences
              whether you want to create a new internet appearance from scratch
              or need new features to update your existing site. We are
              acquainted with modern tools, so your website will not only be
              beautiful but also friendly for users on any devices. Make Bernum
              your website design agency of choice and let us help you build a
              unique brand that works for you online.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Here at Bernum we understand that your website is usually the
              first point of contact that your potential clients have with your
              business. Which is why every package we offer in terms of web
              design is designed to be as visually captivating and unique as
              your company itself. We value user interaction through the
              website’s navigation, website speed, and website compatibility
              with different devices. So every visitor should be turned into a
              client, and that is what we are aiming for. Choose Bernum to
              create a website that will not only lure visitors but also keep
              them engaged towards the success of the business.Here at Bernum we
              understand that your website is usually the first point of contact
              that your potential clients have with your business. Which is why
              every package we offer in terms of web design is designed to be as
              visually captivating and unique as your company itself. We value
              user interaction through the website’s navigation, website speed,
              and website compatibility with different devices. So every visitor
              should be turned into a client, and that is what we are aiming
              for. Choose Bernum to create a website that will not only lure
              visitors but also keep them engaged towards the success of the
              business.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum’s web design packages are highly affordable and something
              which pays for itself in the long run. Clients’ satisfaction along
              with positive results allowed them to become one of the most
              famous web design services providers. Our team is focused on
              improving your position on the World Wide Web, driving your
              website’s message home to your audience. Whether you’re searching
              for ways to redesign and revitalize your existing site or get a
              building site from scratch, Bernum is ready to help boost your
              brand and advance your business objectives with professional,
              accessible web layouts.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Start the climb to high profile, fast moving dynamic Bernum web
              design packs. Leveraging our bespoke services, we aim at turning
              your dreams into reality while growing your company’s presence
              online. No matter if you wish to upgrade your brand image, bring
              more traffic or increase conversion rates, our highly customized
              websites are designed to help you achieve your aim. Take the first
              step right now and contact Bernum on how the firm can assist your
              business design a brilliant website that will in turn motivate
              users and set the stage for organizational growth in today’s
              dynamic marketplace.
            </p>
          </div>
        </div>
      </div>

      <LandingContactForm />

      <Footer />
    </>
  );
}

export default CompanyMarkham;
