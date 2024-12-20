import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Link from "next/link";

import "react-accessible-accordion/dist/fancy-example.css"; // Import styles for the library

export default function FAQAccordion() {
  const FAQs = [
    {
      title: "Why work with Bernum Technologies?",
      details:
        "Bernum is a leading web design and development company known for delivering customized and innovative digital solutions. Our experienced team focuses on creating high-performing websites that not only look great but also drive results. We emphasize user experience, functionality, and scalability, ensuring your online presence aligns with your business goals.",
      id: "a",
    },
    {
      title: "How long does it take to design and develop a website?",
      details:
        "The timeline depends on the complexity of the project. A simple website may take 4–6 weeks, while a more complex website with custom features, e-commerce, or extensive content could take several months. We’ll provide a clear timeline during the project planning phase.",
      id: "b",
    },
    {
      title: "How much does a website cost?",
      details:
        "The cost of designing and developing a website varies based on the complexity, features, and customization required. A basic website may cost a few thousand dollars, while a larger, custom-built website with advanced functionality can cost more. We offer tailored quotes based on your business needs and goals.",
      id: "c",
    },
    {
      title: "Will my website be mobile-friendly?",
      details:
        "Yes, we design and develop responsive websites that work seamlessly on all devices, including smartphones, tablets, and desktops. Ensuring your website is mobile-friendly is crucial for user experience and search engine rankings.",
      id: "d",
    },
    {
      title: "Do you provide custom website design services?",
      details:
        "Absolutely! We specialize in creating custom websites tailored to your specific brand, target audience, and business objectives. Our designs are unique and crafted to provide the best user experience, helping your business stand out online.",
      id: "e",
    },
  ];

  return (
    <div className="col-lg-12 col-md-12">
      <div className="what-we-do-content-accordion">
        <Accordion id="faqaccordion" allowZeroExpanded preExpanded={["a"]}>
          {FAQs.map((value) => (
            <AccordionItem key={value.id} uuid={value.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>{value.title}</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{value.details}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
    </div>
  );
}
