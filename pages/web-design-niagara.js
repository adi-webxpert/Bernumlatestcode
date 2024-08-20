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
function Niagara() {
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
        <title>Elevate Your Web Design Niagara Experience With Bernum</title>
        <meta name="description" content="Transforming online visions into reality with stunning Web Design Niagara. Bernum: Your Canadian Web Development experts." />
        <link href="https://www.bernum.ca/web-design-niagara/" rel="canonical" />

<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.bernum.ca/web-design-niagara/" />
<meta
  property="og:image"
  content="http://bernum.ca/images/main-logo.png"
/>
<meta property="og:site_name" content="Bernum" />
<meta
  property="og:title"
  content="Elevate Your Web Design Niagara Experience With Bernum"
/>
<meta
  property="og:description"
  content="Transforming online visions into reality with stunning Web Design Niagara. Bernum: Your Canadian Web Development experts."
/>
        <meta name="keywords" content="Web Design Niagara" />
      </Head>
      <NavbarStyleTwo />

      <LandingPageBanner pageTitle="Web Design Niagara" />

      {/* tabs */}
      <div className=" container tabs-three">
        <div className="row justify-center mx-6 mt-12">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              <b>  <a className="seo-links" href="https://bernum.ca/web-design/"> web design </a> Niagara</b> provides businesses the means to
              realize the full potential of the internet for business operations
              by offering innovative and creative  web design services designed
              to expand brand identities so that they resonate more strongly
              with target audiences.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              At Web Design Niagara, we understand that your website
              embodies more than a virtual storefront; it encapsulates
              everything about your brand's values and aspirations. Our expert
              team excels at marrying style with technology for sites that not
              only aesthetically please visitors but are functionally robust as
              well. Our synergy approach means stunning visuals fit seamlessly
              with cutting-edge technologies for an impressive user experience
              that quickly converts visitors into customers!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
             Web Design Niagara  prides itself on its unwavering
              commitment to excellence. We take great pleasure in offering
              tailored web solutions tailored to every unique need or goal—be
              they startups looking for digital presence, small businesses
              looking for additional online reach expansion, or long-standing
              enterprises seeking digital renewal—whatever their need may be,
               Web Design Niagara has the vision, talent, and skillset necessary
              to bring dreams of digital excellence alive!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
          Web Design Niagara stands out as an industry leader due to
              our unremitting dedication to staying current with industry trends
              and technologies. Our team upgrades their skills continuously so
              your website exceeds the expectations of contemporary online
              users, meeting user demands while remaining secure within an
              ever-evolving digital realm. Keeping abreast of developments helps
              your site remain relevant, competitive, and safe—two hallmarks of
              success in any competitive industry!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
           Web Design Niagara  is your dependable partner on your path
              towards online success. Through cutting-edge  web design services,
              we help businesses like yours stand out in the digital ocean by
              leaving lasting impressions with their target audiences. No matter
              if it's new site development or optimisation of an existing one,
              trust  web design Niagara as your creative advisor in achieving
              online excellence!
            </p>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div>
        <div className="lg:text-center mt-36 why-choose-sec">
          <Container maxWidth="md">
            <h2 className="text-3xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span style={{ color: "rgb(245, 153, 72)" }}> Us</span>?
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
                    Functional Websites
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                     Web Design Niagara has extensive expertise in crafting
                    visually appealing yet fully functional websites to suit
                    client businesses' business requirements precisely.
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
                    Creative  Web Design Solutions
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At Niagara Web Solutions, our  web designers combine
                    creativity and functionality in developing customized
                    website solutions tailored specifically to Niagara
                    businesses' specific requirements.
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
                     Web Design Niagara provides responsive website design to
                    ensure that your website works flawlessly across devices,
                    from desktop computers to smartphones, giving users an
                    optimal user experience.
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
                    Our experts integrate advanced SEO practices into your
                    website in order to increase its rank on search engines and
                    drive more organic traffic towards it.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg fill="white"  className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                     
                    <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/></svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    User-Friendly Navigation
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    In our designs, the user-friendliness of navigation is
                    prioritized to allow visitors to quickly locate what they're
                    searching for.
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
                    Custom Web Development
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    Each website we build is tailor-made to match the goals and
                    strategies of your specific business, guaranteeing an
                    optimized online presence for you.
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
                    E-commerce Platforms
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                     Web Design Niagara provides custom e-commerce platforms
                    specifically tailored for your company's requirements and
                    security concerns, helping your products or services sell
                    online with ease and security in mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg   fill="white"   className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                      
                     
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Content Management Solutions
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    With our content management systems, updating and managing
                    the contents of your website becomes simple, with no extra
                    work needed on your part.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg fill="white"  className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  
                    <path d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"/></svg>
                      
                     
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Local Focus
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At Niagara  Web Design Group, our expertise in the local
                    market allows us to effectively connect you to your target
                    audience within the Niagara region.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full pt-6">
              <div className="flow-root h-full rounded-lg bg-gray-50 px-6 pb-8">
                <div className="-mt-6 text-center">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md  bg-rose-500 p-3 shadow-lg">
                    <svg   fill="white"   className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    
                    <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                      
                    
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight text-gray-900">
                    Technologies & Design Tools
                  </h3>
                  <p className="mt-2 text-base leading-snug text-gray-500 md:mt-4 md:leading-relaxed">
                    At Bernum, we use cutting-edge web technologies and design
                    tools to make sure that your site stands out in an
                    increasingly cluttered digital landscape.
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
              For exceptional  web design services in Niagara, Bernum stands head
              and shoulders above any competition. At Bernum, we take great
              pleasure in our passion-fueled tech expertise that ensures we
              deliver outstanding  web designs for Niagara customers like
              yourself, ready to redefine and expand upon it to reach new levels
              of success online.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum's website design experts specialize in crafting websites
              that not only look stunning but also function seamlessly,
              something your online image should reflect in today's digital
              environment. That is our expertise at work: years of helping many
              businesses prosper online through us!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum takes our commitment to  web design Niagara very seriously,
              not simply as an industry buzzword but as part of an overall
              philosophy for providing cutting-edge web services tailored
              specifically for each individual need. No matter whether it be for
              an emerging brand or an established one, Bernum has all of the
              expertise required to transform online identities for all sizes of
              businesses in Niagara's vibrant digital marketplace. Choose us and
              make an impression online!
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
              Our team of expert professionals specializes in creating websites
              that seamlessly combine style and technology, creating immersive
              user experiences for our clients that drive results. Leveraging
              their skills and dedication, they help businesses not only
              establish strong digital footprints but also thrive within an
              ever-evolving digital environment.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Bernum can assist with all your Niagara  web design needs,
              prioritizing success above all else. Our dedication and attention
              to detail shine through with every project that we undertake,
              bringing your vision for a website to fruition while adhering to
              brand identity guidelines and business goals perfectly! Our
              innovative creative flair shines bright in each and every one of
              them!
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              No matter the scale or scope of your business, our custom web
              design solutions are tailored specifically to suit your
              requirements. From responsive designs and e-commerce functionality
              to stunning aesthetics, we possess all of the tools necessary for
              producing websites that not only look beautiful but deliver
              impressive performance as well.
            </p>
            <p className="text-3xl text-base leading-snug text-gray-600 md:mt-2 md:leading-relaxed poppinFont">
              Don't pass up this chance to increase the online visibility and
              success of your business by passing up  web design Niagara today;
              experience Bernum's creative  web design services first-hand, which
              will allow your organization to stand out among its industry
              competitors while experiencing online growth! Let Bernum help make
              an impression while creating lasting change through digital space!
            </p>
          </div>
        </div>
      </div>

      <LandingContactForm />

      <Footer />
    </>
  );
}

export default Niagara;
