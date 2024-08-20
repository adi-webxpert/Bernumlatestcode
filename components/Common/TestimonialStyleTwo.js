import React from "react";
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "@mui/material/useMediaQuery";




// const options = {
//     loop: true,
//     nav: false,
//     dots: true,
//     autoplayHoverPause: true,
//     autoplay: true,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     items: 1,
//     navText: [
//         "<i class='flaticon-back'></i>",
//         "<i class='flaticon-chevron'></i>"
//     ]
// };

const TestimonialStyleTwo = () => {
  const [display, setDisplay] = React.useState(false);
  const matches = useMediaQuery("(max-width:724px)");
  
  const options = {
    showArrows: matches,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    autoPlay: true,
    interval: 5000, // Adjust the autoplay interval as needed
    stopOnHover: true,
    transitionTime: 500, // Adjust the transition time as needed
    preventMovementUntilSwipeScrollTolerance: matches,
      swipeScrollTolerance: 50,
  };
  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="feedback-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="feedback-image">
              <img src="/images/feedback-img-new1.jpg" alt="image" />
              <img src="/images/feedback-img3-new.jpg" alt="image" />
              <img src="/images/feedback-img4-new.jpg" alt="image" />
              <img src="/images/feedback-img5-new.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="feedback-content">
              <span className="sub-title">Feedback</span>
              <h2>What Our Clients Are Saying?</h2>

              {/* {display ?  */}
              <div className="feedback-slides aboutTestimonial">
                <Carousel {...options}>
                  <div className="single-feedback-item">
                    <p>
                      I had the privilege of working with Bernum Development
                      Services and their exceptional Python development team,
                      and I'm thrilled to share my experience. I can confidently say that Bernum
                      exceeded every one of them.
                    </p>
                    <p>
                      I can confidently recommend Bernum to anyone seeking
                      Python development expertise.
                    </p>

                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <img src="/images/feedback-img3-new.jpg" alt="image" />
                        <div className="title">
                          <h3>John Smith</h3>
                          <span>Python Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-feedback-item">
                    <p>
                      I had the pleasure of working with Bernum Development
                      Services for our website project, and I couldn't be more
                      delighted with the outcome.Their
                      team exhibited a level of professionalism and expertise
                      that immediately put us at ease.
                    </p>
                    <p>
                      They not only met our specific requirements but also
                      offered innovative ideas to improve the overall design and
                      functionality.
                    </p>

                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <img src="/images/feedback-img5-new.jpg" alt="image" />
                        <div className="title">
                          <h3>Sarah Taylor</h3>
                          <span>Web Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-feedback-item">
                    <p>
                      I wholeheartedly recommend Bernum Development Services to
                      anyone in need of web design expertise. Their design
                      team's talent, attention to detail, and dedication to
                      client satisfaction make them a standout choice in the
                      industry. Thank you, Bernum
                    </p>
                    <p>
                      I recently worked with Bernum Development Services on a
                      website design project, and I'm extremely pleased with the
                      results.
                    </p>

                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <img src="/images/feedback-img4-new.jpg" alt="image" />
                        <div className="title">
                          <h3>James Anderson</h3>
                          <span>Web Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>

                {/* : (
                ""
              )
              } */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape16">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
    </div>
  );
};

export default TestimonialStyleTwo;
