import React from "react";
import Link from "next/link";
import services from "../../services/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerMenus, setFooterMenus] = React.useState({
    explore: [],
    resources: [],
    locations: [],
  });
  const [settings, setSettings] = React.useState();

  React.useEffect(() => {
    let getFooterMenus = services.getMenus("footer");
    setFooterMenus(getFooterMenus);

    let getSettings = services.getSettings();
    setSettings(getSettings);
  }, []);

  return (
    <footer className="footer-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="single-footer-widget">
              <Link href="/">
                <a className="logo">
                  <img src="/images/main-logo.png" alt="logo" />
                </a>
              </Link>
              <p>
                Bernum offers tech-enabled web design and web development
                services and provides customized strategies specifically to each
                of our client's needs and goals. We aim to help clients
                integrate their business vision and goals with their digital
                presence, showcase their expertise.
              </p>
            </div>

            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  {settings && settings.address}
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href={"mailto:" + ((settings && settings.email) || "/#")}>
                    {settings && settings.email}
                  </a>
                </li>
                <li>
                  <i className="bx bx-phone"></i>
                  {settings && settings.mobile}
                </li>
              </ul>
              <ul className="social-link">
                <li>
                  <a
                    href={
                      (settings && settings.facebook) ||
                      "https://www.facebook.com/BernumTechnologies?mibextid=LQQJ4d"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      (settings && settings.twitter) ||
                      "https://x.com/bernum84561"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      (settings && settings.instagram) ||
                      "https://www.instagram.com/bernumtechnologies"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      (settings && settings.linkedin) ||
                      "https://www.linkedin.com/company/bernum-technologies/"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="single-footer-widget pl-5 ">
              <div></div>
              <h3>Explore</h3>
              <ul className="footer-links-list ">
                {footerMenus.explore.map((item, index) => (
                  <li className="flex flex-row" key={index}>
                    <Link href={item.to}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="single-footer-widget pl-2">
              <h3>Services</h3>
              <ul className="footer-links-list">
                {footerMenus.resources.map((item, index) => (
                  <li key={index}>
                    <Link href={item.to}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="single-footer-widget pl-2">
              <h3>Locations</h3>
              <div>
                <ul className="footer-links-list divide 	 ">
                  {footerMenus.locations.map((item, index) => (
                    <li key={index}>
                      <Link href={item.to}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-3 col-sm-3">
           
          </div> */}
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3">
              <p>
                <i className="bx bx-copyright"></i> {currentYear}{" "}
                <strong>Bernum</strong>
              </p>
            </div>

            <div className="col-lg-3 col-md-3">
              <ul className="designBy">
                <li>Design By</li>
                <li>
                  <Link href="https://freepik.com" passHref>
                    <a target="_blank" rel="noreferrer">
                      Freepik
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://storyset.com" passHref>
                    <a target="_blank" rel="noreferrer">
                      Storyset
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3">
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="shape16">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
    </footer>
  );
};

export default Footer;
