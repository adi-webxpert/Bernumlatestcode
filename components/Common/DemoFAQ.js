import React from "react";
import FAQAccordion from "./FAQAccordion";
import Link from "next/link";

function DemoFAQ() {
  return (
    <div className="faq-sction">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <h2>Frequently Asked Questions </h2>
            <h6>Quick answers to commonly asked questions.</h6>
            <p>
              Our goal is to work with clear communication and be as transparent
              as possible to our clients. If you are not yet ready to get in
              touch with us but you have some questions we can provide a list of
              FAQs.
            </p>
          </div>
          <div id="faqAccodi" className="col-lg-6 pl-11">
            <FAQAccordion />  
            <Link href="https://www.bernum.ca/faq/">
              <a className="default-btn" id="faq-button">MORE FAQs</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoFAQ;
