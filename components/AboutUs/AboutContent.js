import React from "react";
import Head from "next/head";

const AboutContent = () => {
  return (
    <>
      <Head>
        <title>About Us | Bernum</title>
        <meta name="description" content="about us" />
        <meta name="keywords" content="about us" />
        <link href="https://www.bernum.ca/about-us/" rel="canonical" />

      </Head>
      <div className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-us-new-image.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="content">
                  <span className="sub-title">About Us</span>
                  <h2>
                    About Bernum Technologies - Your Ontario Software and
                    Digital Solutions Partner
                  </h2>
                  <p>
                    Welcome to Bernum Technologies, your trusted partner for
                    cutting-edge software development, digital marketing, and
                    design solutions based in the heart of Ontario, Canada.
                  </p>
                  <p>
                    Our journey in the dynamic world of technology began right
                    here in Ontario, where innovation meets opportunity. At
                    Bernum, we are a diverse team of software developers,
                    digital marketing experts, and creative designers who are
                    passionate about transforming ideas into powerful digital
                    solutions.
                  </p>
                  <p>
                    In the ever-evolving landscape of technology, our mission is
                    clear: to deliver top-tier software, provide innovative
                    digital marketing strategies, and craft captivating designs
                    that set our clients apart. We aim to help clients integrate
                    their business vision and goals with their digital presence,
                    showcase their expertise, and help them attract customers
                    via seeing online so that they can continue their great work
                    in their communities. We understand the unique challenges
                    and opportunities that Ontario businesses face, and we're
                    here to help you navigate them.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <p style={{ marginTop: "10px" }}>
                Our multidisciplinary team thrives on collaboration and
                creativity. Whether it's designing intuitive user interfaces,
                developing robust software applications, or crafting compelling
                digital marketing campaigns, we do it all with precision and
                flair. We take pride in staying ahead of industry trends and
                utilizing the latest tools and technologies to propel your
                business forward. Located in Ontario, we're not just a service
                provider; we're your neighbors and fellow community members.
                We're committed to supporting local businesses and fostering
                growth within our vibrant region. Together with our clients,
                we've achieved remarkable results, driving success stories that
                define our journey. We’re interested in working with local
                businesses to help them get set up on an excellent online
                presence and with independent professionals and consultants who
                would like to improve their thought leadership content. Thank
                you for considering Bernum Technologies as your digital partner.
                We invite you to explore our services, learn more about our
                team, and join us in shaping a brighter, more innovative future
                for your business. The web is our passion, and we’re passionate
                about helping businesses reach their goals. So when you choose
                Bernum as your web development, designing and digital marketing
                agency, you won’t get a cookie-cutter strategy — you’ll get a
                custom plan that fits your company, your needs, and your goals.
                Ready to embark on this digital adventure together? Feel free to
                contact us, mail us and discover how we can transform your ideas
                into digital realities right here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
