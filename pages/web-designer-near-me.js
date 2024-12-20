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
function DesignerNearME() {
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
      <title>Top Web Designer Near Me| Bernum Canada's Expert</title>
      <meta
        name="description"
        content="Bernum Is the Top Canadian Web Development & Web Design Company. Find a Web Designer near Me for Your Project. Contact Today!"
      />
      <link
        href="https://www.bernum.ca/web-designer-near-me/"
        rel="canonical"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.bernum.ca/web-designer-near-me/"
      />
      <meta
        property="og:image"
        content="http://bernum.ca/images/main-logo.png"
      />
      <meta property="og:site_name" content="Bernum" />
      <meta
        property="og:title"
        content="Top Web Designer Near Me| Bernum Canada's Expert"
      />
      <meta
        property="og:description"
        content="Bernum Is the Top Canadian Web Development & Web Design Company. Find a Web Designer near Me for Your Project. Contact Today!"
      />
      <meta name="keywords" content="Web Designer near Me" />
      <NavbarStyleTwo />

      <LandingPageBanner pageTitle="Web Designer near Me" />

      {/* tabs */}
      <div className=" container tabs-three">
        <div className="row justify-center mx-6 mt-12">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              The use of the internet has become an inevitable part of people’s
              life and every serious business requires online presence. It’s
              when you find the right web designer who is professional that the
              whole thing becomes easier. As a company, Bernum understands your
              individual needs in web design and development and creates
              appealing, easy-to-navigate sites for you. To guarantee getting
              the results you want, we provide excellent web design solutions
              for your brand. Stop for mediocrity – for excellent web design
              services, choose Bernum for it is near you! Stop waiting – upgrade
              your online image now with designs that engage and produce.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              That is why Bernum knows how to create great looking websites that
              are just as functional, beautiful, and powerful. Our specialized
              professional and experienced team gives our customer an expert
              website appearance and feel that creates a new unique and
              aesthetic identity online for the brand. With the latest
              technology advancement and creativity, we assist your business to
              find a niche in today’s economy. Select Bernum to guarantee that
              your Web appearance works not just to attract attention but will
              do it effectively. We can build a successful and growing website
              for your business!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              In need of a competent{" "}
              <a className="seo-links" href="https://bernum.ca/web-design/">
                <b> web designer near me?</b>{" "}
              </a>{" "}
              Bernum pioneered specialty outsourcing and brings invaluable,
              local knowledge to the table. Being a Toronto web design company
              we fully realize the peculiarities of the local consumers and
              customers. With this understanding, we are able to design
              corporate web sites that not only relate to your niche market but
              also compel your consumer to act on your business objectives.
              Bernum offers so much more than a website, you get a business
              partner who is dedicated to your growth. Further, let me assist
              and establish an engaging site for your target audience and with
              such return, let’s!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              When it comes to designing Bernum, we offer our clients the best
              of website designs which are highly attractive, innovative,
              responsive, upgradeable and modern with revelant technologies. Our
              professional staff guarantees that the site will have nice looks,
              but equally importantly, is easy to navigate and use. Through
              constant updates on web design features, we avail styles which
              give confidential appreciation among users or clients. If you are
              building a new site from the ground up, or redesigning, our
              innovative know-how ensures your brand is unique in the online
              space. Select us for the best and latest web design solutions that
              reflect your brand’s responsiveness today!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Teamwork is the core of our web design approach, at Bernum. We
              invest time in learning about your business needs, brand
              personality, target markets and other specifications you may have.
              This keeps the website you are developing in line with your vision
              and accepted by your target market. Therefore, conceptualizing
              design with a focus on your goals, we design websites visually
              appealing and effective in achieving the business goals. From
              Bernum, you can receive client-oriented website design services
              that help businesses improve their web presence and results. Shall
              we join forces and put it into life?
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
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white "
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Proximity Is Key
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our physical presence allows our designers to provide unique
                    client-designer interactions that strengthen client-designer
                    bonds.
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
                    Customized Solutions
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Each project is tailor-made to address the particular
                    requirements and accurately reflect your brand identity.
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
                    At our studio, we excel in developing websites with
                    responsive designs that adapt flawlessly across devices for
                    an unparalleled user experience.
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
                        stroke-width="1"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9l-28.6 47.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L328 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H248zM7 7C16.4-2.3 31.6-2.3 41 7l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 41C-2.3 31.6-2.3 16.4 7 7zM471 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L471 7zM7 505c-9.4-9.4-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 505c-9.4 9.4-24.6 9.4-33.9 0zm464 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Targeted Audience
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    As a local web design agency, we understand the unique
                    traits and preferences of your target audience.
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
                    Expertise in Search Engine Optimisation
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our search engine optimisation specialists optimize your
                    website for search engines to increase local online
                    visibility.
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
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Quick Turnaround
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    By being nearby, we are able to work efficiently while
                    meeting deadlines quickly and providing prompt support.
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
                        viewBox="0 0 576 512"
                      >
                        <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM59.4 304.5L88 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V235.3l47.4 57.1c11.3 13.6 31.5 15.5 45.1 4.2s15.5-31.5 4.2-45.1l-73.7-88.9c-18.2-22-45.3-34.7-73.9-34.7H145.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9zM480 240a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM464 344v58.7l-41.4-41.4c-7.3-7.3-17.6-10.6-27.8-9s-18.9 8.1-23.5 17.3l-48 96c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L408.8 438l54.7 54.7c12.4 12.4 29.1 19.3 46.6 19.3c36.4 0 65.9-29.5 65.9-65.9V344c0-30.9-25.1-56-56-56s-56 25.1-56 56zM288 48c0 8.8 7.2 16 16 16h56c8.8 0 16-7.2 16-16s-7.2-16-16-16H304c-8.8 0-16 7.2-16 16zm-.8 49.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l48 24c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-48-24z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Consultation Service
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    For your convenience, we provide in-person consultations so
                    we can address every detail of your project together
                    directly.
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
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Competitive Pricing
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our local presence doesn't translate to increased costs;
                    rather, we provide cost-effective solutions without
                    compromising quality.
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
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152zm136 16a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Explore Our Portfolio of Success
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Check out some of the success stories shared by local
                    clients utilizing our web design services nearby.
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
                        fill=" white"
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                      >
                        <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    24/7 Assistance
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    No matter the time or day, our support is just a call or
                    drive away to offer immediate help when required.
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
              Now that the market has become significantly more competitive, a
              business simply cannot afford to be invisible online. Our{" "}
              <b> local Web Design services </b> allow your brand to be
              rejuvenated while Bernum puts it at the forefront for the
              incumbent competitive market environment. Our Web services are
              unique and are custom made to fit the emerging markets to ensure
              your Website is the one selected to drive that growth. Bernum is a
              partner for your business with whom you can achieve impressive
              results in the highly competitive context of online trading.
              Transformative design begins with art work that not only looks
              great but also boosts engagement and performance
            </p>

            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Looking for a web designer with a nearby location? Bernum is your
              go-to company, making that vision a reality with unique and
              effective web design services to all companies. Regardless of your
              business type; whether you’re a small local business or a large
              enterprise, our website designs will suit your business needs. We
              do this with years of experience and a great team of developers,
              designers , copywriters who make sure that any website we build
              for our clients will be beautiful, functional and promotes the
              business. Let Bernum offer you an affordable, professional web
              design service that caters to the needs of your organization and
              your target market.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              It will be beneficial for you and your brand, don’t lose your
              chance to be at the top of each search. Contact Bernum;{" "}
              <b> Responsive web design near me</b>, and let us offer you the
              best services you never expected. Our qualified team design a
              unique, professional, and friendly website for your business. We
              remain focused on turning you or your business into a successful
              and prominent figure in the online world. Contact Bernum today and
              get your first engaging step towards a deep web presence that
              changes your business fortune.
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
              Bernum’s web designers incorporate both art and sciences to
              rebrand and reinvent your business’s online platform. Many years
              of experience and a literate staff of designers allows us to offer
              a wide range of web design services that correspond to your brand
              identity. Whether you want a complete overhaul of your site or a
              new site built from the ground up, we create stunning, intuitive
              designs that engage and persuade your visitors. Count on Bernum to
              design you a beautiful and effective website that will help
              progress your business forward. Let us take your ideas into
              reality with professional web design services that will fit your
              needs.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              That’s why you don’t just type in, <b>‘Web designer near me</b>,’
              You’re not searching for a service; you’re looking for a solution
              to your local business. Bernum does not just function like any
              other web design agency; Bernum is your Web team that understands
              market tendencies and target audience specifics. Drawing from our
              extensive experience, we work with your company to come up with
              unique designs that not only represent your brand but also have a
              positive reception with your audience. You can trust Bernum to
              deliver a website that speaks your target clients’ language and
              achieves the local goal. Join me in creating the optimum internet
              presence for your needs with smart design.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum is dedicated to providing quality and professional services
              across all domains. When you select us as your web designers, you
              get a whole team dedicated to your triumph online. It is our
              delight to deliver to you fabulous visual graphic designs of your
              site with great working operational platforms. If you require the
              design of an e-shop, a blog or a corporate page, you benefit from
              the advanced web design services at Bernum, a service not
              available with any other agency. Let us design you a site that not
              only looks great, but gets you results for your business. Welcome
              to the Age of the Online Vision – let us help you bring your
              vision to life.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Looking for a web designer close to you? Bernum is prepared to
              create a phenomenal web design solution for you. Our team is
              focused on delivering aesthetically pleasing designs that are well
              optimized and function equally well across platforms. In our
              approach, we blend art with business making your site appear
              unique as well as delivering on its promise. For purposes of
              seeking the services of a web design agency, whether with an aim
              of seeking improved user experience or increased online sales,
              Bernum offers optimized, excellent website designs to its clients
              in order to better their brand’s online appeal. You can hire us to
              implement your digital vision with enviable efficiency and
              finesse!
            </p>
          </div>
        </div>
      </div>

      <LandingContactForm />

      <Footer />
    </>
  );
}

export default DesignerNearME;
