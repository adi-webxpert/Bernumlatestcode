import React, { useState } from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import Contact from "../contact/page";
import { Container, Grid } from "@mui/material";
import Footer from "../components/_App/Footer";
import LandingContactForm from "../components/Common/LandingPageContact";
import LandingPageBanner from "../components/Common/LandingPageBanner";
import LandingPageTestimonial from "../components/Common/LandingPageTestimonial";
import Head from "next/head";
function Ottawa() {
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
        <title>
          Web Design Ottawa | Top Web Development in Canada - Bernum
        </title>
        <meta
          name="description"
          content="Your top choice for professional Web Design Ottawa services in Canada. Elevate your online presence today & connect today."
        />
        <link href="https://www.bernum.ca/web-design-ottawa/" rel="canonical" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.bernum.ca/web-design-ottawa/"
        />
        <meta
          property="og:image"
          content="http://bernum.ca/images/main-logo.png"
        />
        <meta property="og:site_name" content="Bernum" />
        <meta
          property="og:title"
          content="Web Design Ottawa | Top Web Development in Canada - Bernum"
        />
        <meta
          property="og:description"
          content="Your top choice for professional Web Design Ottawa services in Canada. Elevate your online presence today & connect today."
        />
        <meta name="keywords" content="Web Design Ottawa" />
      </Head>
      <NavbarStyleTwo />

      <LandingPageBanner pageTitle="Web Design Ottawa" />

      {/* tabs */}
      {/* tabs */}
      <div className=" container tabs-three">
        <div className="row justify-center mx-6 mt-12">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              At{" "}
              <b>
                {" "}
                <a className="seo-links" href="https://bernum.ca/web-design/">
                  {" "}
                  Web Design{" "}
                </a>
                Ottawa{" "}
              </b>
              , we understand that the necessity of an effective digital
              presence is no mere luxury in today's fast-evolving digital era;
              rather, it must accurately represent both your company and brand
              with precision and flair. That is where <b>Web Design Ottawa </b>
              comes into its own, with their passionate, innovation-minded
              experts specializing in crafting captivating online experiences
              that leave an indelible mark with target audiences.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              <b> Web Design Ottawa </b> provides more than just services; we
              embark on an artistic adventure together. Your website serves more
              than simply collecting pages; it should serve as the gateway into
              your business, an engagement platform for customer interactions,
              and an instrument of growth. Our experienced web design
              professionals possess both artistic and technological proficiency
              when it comes to web design; they know just what to do to bring
              your visions to life!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              <b> Web Design Ottawa </b>stands apart due to our unfaltering
              commitment to your success on the Internet market. We don't merely
              build websites; rather, we craft digital experiences that engage
              audiences and lead to results, whether for established enterprises
              looking for revamping or startups just getting underway! No matter
              who our client may be, we have both the expertise and creativity
              required for success!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              At <b> Web Design Ottawa </b>, our approach is distinguished by
              innovation, precision, and customer-first thinking. We invest the
              time in understanding your unique goals, target audience, brand
              identity, website needs, and website requirements, making sure
              every element from intuitive navigation and responsive design
              through to visually captivating graphics and captivating content
              stands out in today's crowded digital environment.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              <b> Web Design Ottawa </b>excels at every step of the web design
              process, from crafting user-friendly interfaces and optimizing for
              search engines to offering seamless functionality across devices.
              We do it all. Furthermore, our team's commitment to staying ahead
              of web design trends and technologies guarantees your site remains
              effective even as online environments progress over time.
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
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white "
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Knowledgeable Staff
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Bernum provides expert web design services in Ottawa. Our
                    knowledgeable staff possess all of the skills and know-how
                    required to craft breathtaking, user-friendly sites.
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
                        <path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM224 64c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C145.5 152.1 129 192 96 192c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C168.1 286.5 208 303 208 336c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C302.5 263.9 319 224 352 224c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C279.9 129.5 240 113 240 80c0-8.8-7.2-16-16-16zm-24 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Customized Web Solutions
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At <b>Web Design Ottawa</b>, we understand that each
                    business has individual requirements; as a result, our{" "}
                    <b>Web Design Ottawa</b>
                    services can be customized specifically to match the brand
                    that's unique to them for an online presence that stands
                    out.
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
                    Responsive Web Design
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At Bluewater Marketing Group, our responsive website
                    designers focus on crafting websites to be optimized across
                    devices ranging from desktops to smartphones for optimal
                    viewing experience and functionality.
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
                        stroke-width="1"
                        stroke="currentColor"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 512 512"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Priority
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At <b>Web Design Ottawa</b>, our priority lies in designing
                    intuitive user experiences to keep visitors coming back for
                    more.
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
                    SEO Optimize
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At WebTackus, we implement best SEO practices into every
                    website we design, helping your site appear higher in search
                    engine results and increasing its online visibility.
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
                    Looking to sell products or services online?{" "}
                    <b>Web Design Ottawa </b>
                    can design an efficient e-commerce platform tailored to fit
                    the needs of your business.
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
                        height="1em"
                        fill="white"
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Ottawa-Based Services
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    With roots here in Ottawa, we understand the local market
                    well. That means our web design services in Ottawa can be
                    customized specifically for businesses located here.
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
                        height="1em"
                      >
                        <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Brand Integration
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our experts seamlessly incorporate your brand identity into
                    website designs for an impressive online presence.
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
                    Innovation and Technology
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At our web design agency, we stay abreast of web design
                    trends and technologies so your site stays modern and
                    competitive.
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
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Client-Centric Approach
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At our core lies client satisfaction; to that end, we
                    collaborate closely with all of our clients throughout the
                    design process in order to bring their ideas into reality.
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
              Bernum stands out as an invaluable partner when it comes to web
              design in Ottawa for businesses aiming to increase their digital
              presence. Our experienced team specialises in crafting visually
              striking yet highly functional sites that boost brand perception
              in the online arena.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              At Bernum, we understand the significance of marrying style with
              technology seamlessly, which is why every web design project that
              we undertake is tailored specifically for your business
              requirements. Not only will your online platform look
              professional, but its performance will exceed all expectations.
              Thanks to Bernum's experience, you can thrive online in today's
              highly competitive markets!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              No matter if you are an emerging startup or an established
              corporation in Ottawa, our web design services cater to them all.
              Experience Bernum and watch your online presence become an
              effective means of success! Get in touch now to explore all that
              <b> Web Design Ottawa </b> can do—let us help realize all your
              digital goals!
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
              <b> Web Design Ottawa </b> is more than a service; it is our
              passion and expertise! A successful online presence begins with
              user-friendly website designs, with our creative approach ensuring
              not only stunning aesthetics but seamless functionality as well,
              giving visitors an extraordinary browsing experience! We invite
              you to contact us and learn about all we offer—no one does it like
              we do!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Our experienced designers and developers collaborate closely with
              you to understand your business goals, brand identity, target
              audience, and website design solution, then tailor a site that
              speaks directly to each of them. Regardless of whether your
              organization is local to Ottawa or global in scale, we have
              everything it takes to produce results aligned with your
              objectives.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum <b> Web Design Ottawa </b> services specialize in creating
              responsive websites designed specifically to adapt to various
              devices and screen sizes, optimize for search engines to rank
              well, and attract organic traffic. Our dedication to excellence is
              evident in every detail, from color schemes, typography, and
              navigation through usability testing to color selection for search
              engines.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Are you ready to expand your digital identity with professional
              Ottawa web design services? Don't miss this chance; contact Bernum
              now so they can show how their expertise in Ottawa's ever-evolving
              web design sector can elevate and grow your digital presence and
              your business! Don't wait; grab this chance now.
            </p>
          </div>
        </div>
      </div>
      <LandingContactForm />

      <Footer />
    </>
  );
}

export default Ottawa;
