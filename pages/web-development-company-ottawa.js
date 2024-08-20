import React, { useState } from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";

// import Contact from "../contact/page";
import { Container, Grid } from "@mui/material";
import Footer from "../components/_App/Footer";
import LandingContactForm from "../components/Common/LandingPageContact";
import LandingPageBanner from "../components/Common/LandingPageBanner";
import LandingPageTestimonial from "../components/Common/LandingPageTestimonial";
import Portfoliomain from "../components/Portfolio-main";
import Head from "next/head";
function developmentOttawa() {
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
        <title>Most Leading Web Development Company Ottawa - Bernum</title>
        <meta
          name="description"
          content="Transforming Ottawa's Digital Landscape – Bernum, Your Premier Web Development Company Ottawa. To Know More Connect with Us Today!"
        />
         <link href="https://www.bernum.ca/web-development-company-ottawa/" rel="canonical" />

<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.bernum.ca/web-development-company-ottawa/" />
<meta
  property="og:image"
  content="http://bernum.ca/images/main-logo.png"
/>
<meta property="og:site_name" content="Bernum" />
<meta
  property="og:title"
  content="Most Leading Web Development Company Ottawa - Bernum"
/>
<meta
  property="og:description"
  content="Transforming Ottawa's Digital Landscape – Bernum, Your Premier Web Development Company Ottawa. To Know More Connect with Us Today!"
/>
        <meta name="keywords" content="Web Development Company Ottawa" />
      </Head>
      <NavbarStyleTwo />

      <LandingPageBanner pageTitle="Web Development Company Ottawa" />

      {/* tabs */}
      <div className=" container tabs-three">
        <div className="row justify-center mx-6 mt-12">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum prides itself on being more than just a{" "}
              <a
                className="seo-links"
                href="https://bernum.ca/web-development/"
              >
                {" "}
                web development{" "}
              </a>
              firm; we pride ourselves on serving as digital architects who
              design experiences to engage your target audience online. No
              matter if it is for an ambitious startup or Fortune 500 firm,
              budget constraints require tight collaboration to realize all web
              design dreams! We take great care to work closely with every
              client for optimal outcomes that match budget constraints while
              staying true to their design dreams!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Website Development Company Ottawa stands for more than just
              words; it stands for excellence and innovation. Our skilled
              professionals specialise in crafting websites that not only
              reflect your brand identity but elevate it as well. They possess
              extensive knowledge about the Ottawa market and can tailor our
              services precisely according to business demands in this bustling
              city.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum stands out as an exceptional web development partner due to
              our holistic approach. We don't simply build websites; rather, we
              develop digital ecosystems designed to spur growth, engage target
              audiences, and convert visitors into loyal customers. Bernum
              boasts cutting-edge technologies integrated seamlessly with
              eye-catching designs for optimal user experiences and
              functionality for optimal web developments.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Collaborate with us and witness the magic of synergy: our team
              will collaborate closely with you, merging your industry insights
              and vision with technical know-how from Ottawa web development
              Company, creating something special in an increasingly cluttered
              online landscape. At Ottawa web development Company, our goal is
              to not only meet but exceed your expectations!
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
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Specializing
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Bernum is an Ottawa web development provider known for
                    creating dynamic, responsive websites.
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
                        <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V285.7l-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Custom Web Design
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At Blue Elephant Media Group, our custom website design
                    solutions cater to every client imaginable, from startups
                    and ventures all the way up to Fortune 500 corporations, for
                    an unrivalled online presence.
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
                        className="h-8 w-8 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Affordable Services
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our web development solutions are priced competitively to
                    make high-quality web development accessible for businesses
                    of any size in Ottawa.
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
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Cutting-Edge Technology
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At our web development firm, we stay abreast of current web
                    design trends and use cutting-edge technologies that ensure
                    your website will always remain at the cutting-edge of
                    innovation.
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
                        viewBox="0 0 640 512"
                      >
                        <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Collaborative Approach
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At our core lies collaboration—working in close partnership
                    with you throughout the development process to bring your
                    ideas to fruition.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg  fill="white"
                      className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                     
                    <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/></svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Responsive Design
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    On our websites, our designs are built to be
                    mobile-responsive, ensuring they look and function
                    beautifully across devices.
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
                    Optimisation Services for SEO
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our specialists use best-practice SEO approaches to increase
                    website visibility and its search engine rank.
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
                    Experience in Ecommerce Development
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Do you run an online store? Our experts possess extensive
                    expertise in developing it so that it succeeds.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg fill="white"  className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Local Expertise
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    With offices based out of Ottawa, our local expertise allows
                    us to tailor websites specifically targeted at Ottawa
                    audiences.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg fill="white"  className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  
                    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Proven Track Record
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Our proven history of successful projects and satisfied
                    clients makes Bernum an industry leader when it comes to web
                    development in Ottawa.
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
              At our firm, we specialize in developing customized web solutions
              tailored specifically for businesses of any kind, be they startups
              or Fortune 500 conglomerates. No matter the scale of the venture
              you represent, our solutions have you covered!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum's experienced team works closely with you to bring your web
              vision into reality while staying within budget. At Bernum, we
              recognise the significance of an effective website; it serves as
              your brand identity online. That is why our expertise goes to work
              for your brand by designing stunning yet seamless sites with
              usability that showcase it best.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum Web Development of Ottawa provides exceptional design,
              development, and user experience services that truly reflect your
              business essence. Partner with us now for all of your web
              development needs to experience Bernum's difference!
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
              At Bernum, we understand the unique requirements and aspirations
              of businesses located in Ottawa. As one of Ottawa's premiere web
              development companies, our proven track record speaks for itself:
              we specialize in crafting high-quality websites that not only meet
              but surpass client expectations. Our experienced professionals
              specialize in developing appealing yet user-friendly sites.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum, as your web development company in Ottawa, ensures an
              effortless and collaborative development experience. We take the
              time to fully comprehend your vision, goals, brand identity, and
              target audience and ensure your website reflects all these factors
              accurately. With an emphasis on excellence that encompasses
              everything from layout and design to user experience and
              performance optimisation, Bernum provides exceptional website
              solutions!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum offers more than just websites; we act as strategic
              partners dedicated to your online success. With experience working
              with start-ups and Fortune 500 companies, Bernum possesses the
              necessary expertise to tailor its services specifically to you and
              meet all of your specific requirements.
            </p>

            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Contact Bernum Web Development Company of Ottawa now, and let's
              embark on the adventure of crafting an impressive and
              result-driven website together! Bernum can transform your dreams
              of web development into reality, giving us all a leg-up on making
              them come true.
            </p>
          </div>
        </div>
      </div>

      <LandingContactForm />

      <Footer />
    </>
  );
}

export default developmentOttawa;
