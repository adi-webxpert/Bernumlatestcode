import React, { useState } from "react";
import Button from "@mui/material/Button";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Container, Grid } from "@mui/material";
import portfolioItems from "../services/portfolio";
export default function Portfoliomain() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all"); /// set by default all portfolio

  const handleFilterClick = (filter) => {
    setActiveFilter(filter); /// set new  portfolio category
  };
  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  // filter

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  // // Define your images here

  return (
    <>
      {/* portfolio */}
      <div className="portfolio mt-20">
        <Container>
          <div className="container ms-2">
            <div className="text-center my-9 text-3xl">
              <h2 className="text-3xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Our
                <span style={{ color: "rgb(245, 153, 72)" }}> Portfolio</span>
              </h2>
              <div className="elementor-widget-container flex justify-center mt-2">
                <div className="elementor-divider"></div>
              </div>
            </div>

            {/* filter gallery */}
            <div id="portfolio" className="portfolio my-12">
              <div className="container offset-top-bot">
                <div className="text-center">
                  <div className="filter-buttons flex justify-center gap-4">
                    <Button
                      className={
                        activeFilter === "all" ? "!bg-rose-500 text-white " : ""
                      }
                      onClick={() => handleFilterClick("all")}
                    >
                      All
                    </Button>
                    <Button
                      className={
                        activeFilter === "graphic"
                          ? "!bg-rose-500 text-white"
                          : ""
                      }
                      onClick={() => handleFilterClick("graphic")}
                    >
                      Graphic
                    </Button>

                    <Button
                      className={
                        activeFilter === "wordpress"
                          ? "!bg-rose-500 text-white"
                          : ""
                      }
                      onClick={() => handleFilterClick("wordpress")}
                    >
                      Wordpress
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              {filteredItems.map((item, index) => (
                <div
                  className={`col-lg-4 col-md-6 col-sm-6 outer transition duration-700 ease-in-out  ${item.category}`}
                  key={item.id}
                  onClick={() => openLightbox(index)}
                >
                  <div className="portfolio-img mt-3.5 ">
                    <img
                      src={item.imageSrc}
                      width="100%"
                      alt={`Image ${item.id}`}
                    />
                  </div>
                  <div className="content">
                    <div className="gallery-item-caption-wrap caption-style-hoverer eael-slide-up">
                      <div className="gallery-item-hoverer-bg"></div>
                      <div className="gallery-item-caption-over ">
                        <h5 className="fg-item-title">
                          <b>{item.title}</b>
                        </h5>
                        <div className="fg-item-content">
                          <p>{item.des}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={filteredItems[lightboxImageIndex].imageSrc}
          nextSrc={
            filteredItems[(lightboxImageIndex + 1) % filteredItems.length]
              .imageSrc
          }
          prevSrc={
            filteredItems[
              (lightboxImageIndex + filteredItems.length - 1) %
                filteredItems.length
            ].imageSrc
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxImageIndex(
              (lightboxImageIndex + filteredItems.length - 1) %
                filteredItems.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxImageIndex(
              (lightboxImageIndex + 1) % filteredItems.length
            )
          }
        />
      )}
    </>
  );
}
