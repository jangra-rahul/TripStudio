import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import text_icon from "../assets/images/svg/text_icon.svg";
import right_arrow from "../assets/images/svg/right_arrow.svg";
import left_arrow from "../assets/images/svg/left_arow.svg";
import stori_icon from "../assets/images/svg/stori_user_icon.svg";
import stori_icon1 from "../assets/images/png/stori_img1.jpeg";
import stori_icon2 from "../assets/images/png/stori_img2.jpeg";
import stori_icon3 from "../assets/images/png/stori_img3.jpeg";
import stori_icon4 from "../assets/images/png/stori_img4.jpeg";
import stori_icon5 from "../assets/images/png/stori_img5.jpeg";
import slider_img4 from "../assets/images/svg/slider_img3.jpeg";
import slider_img5 from "../assets/images/svg/slider_img4.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RealStories = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,

    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="px-3 pb-5">
      <div className="">
        <Container
          className="custom_container  rounded-5 p-md-5 p-3"
          style={{ backgroundColor: "#0063A6" }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div className="d-flex align-items-center gap-2">
              <img className="rounded-5" width={60} src={text_icon} alt="" />
              <p className="mb-0 text-white ff">Our Happy Customer</p>
            </div>
            <div className="d-md-flex align-items-center mt-4 justify-content-between">
              <h3 className=" fs_50 ff fw-bold text-white">
                Real Stories from Real People
              </h3>
              <div className="d-flex mt-3 mt-md-0 align-items-center gap-3">
                <img
                  className="rounded-5"
                  width={60}
                  style={{ cursor: "pointer" }}
                  onClick={handlePrev}
                  src={left_arrow}
                  alt="left_arrow"
                />
                <img
                  className="rounded-5"
                  width={60}
                  src={right_arrow}
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                  alt="right_arrow"
                />
              </div>
            </div>

            <Slider {...settings} ref={sliderRef} className="mt-4">
              {/* Card 1 */}
              {/* <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img className="rounded-5" width={60} src={stori_icon} alt="stori_icon" />
                    <p className=" fs_26  mb-0 fw-bold color_blue">Rajesh S</p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5 className="text-white ff mb-0 fs_26 fw-bold">
                      Working Visa
                    </h5>
                    <p className=" fs_18 text-white mt-3 mb-0 ff">
                      Thanks to Trip Studio, I got my USA visa approved in just
                      a few days! Their team made the entire process so easy and
                      stress-free.
                    </p>
                    <Button
                      style={{
                        border: "2px solid white",
                        backgroundColor: "transparent",
                      }}
                      className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                    >
                      Apply Now &nbsp; &rarr;
                    </Button>
                  </div>
                </div>
              </div> */}

              {/* Card 2 */}
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={60}
                      src={stori_icon1}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">
                      Chaitanya Aggarwal
                    </p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title="Managing Director Universal Cables (faridabad)"
                      className="text-white ff mb-0 fs_26 fw-bold"
                    >
                      Managing Director Universal Cables (faridabad)
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title="Travel studio really expedited my visa process and i got
                      my appointment in 3 days from the date of filing US visa.
                      All things are transparent!"
                      className=" fs_18 text-white mt-3 mb-0 ff"
                    >
                      Travel studio really expedited my visa process and i got
                      my appointment in 3 days from the date of filing US visa.
                      All things are transparent!
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={60}
                      src={stori_icon2}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">Aman Goyal</p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title="Shriram Food Industry Limited - Director - International
                      Business"
                      className="text-white ff mb-0 fs_26 fw-bold"
                    >
                      Shriram Food Industry Limited - Director - International
                      Business
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title=" I cannot thank Trip Studio enough for their exceptional
                      visa services. They secured a quick appointment for my
                      visa interview in just 7 days and assisted me thoroughly
                      with the form filling process. Their attention to detail
                      and proactive communication made a usually stressful
                      experience absolutely hassle-free. Thanks to them, I'm now
                      ready for my trip to the USA!"
                      className=" fs_18 text-white mt-3 mb-0 ff"
                    >
                      I cannot thank Trip Studio enough for their exceptional
                      visa services. They secured a quick appointment for my
                      visa interview in just 7 days and assisted me thoroughly
                      with the form filling process. Their attention to detail
                      and proactive communication made a usually stressful
                      experience absolutely hassle-free. Thanks to them, I'm now
                      ready for my trip to the USA!
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={60}
                      src={stori_icon3}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">
                      Jwelin Rajani
                    </p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5 className="text-white ff mb-0 fs_26 fw-bold">
                      ANGA INFRATECH Dewas, Madhya Pradesh
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      className="ff text-white mt-3 fs_18"
                      title=" Ankur's exceptional service in securing visa dates ahead
                      of schedule deserves high praise. His dedication and
                      professionalism shine through in his ability to expedite
                      the process efficiently and effectively. By going above
                      and beyond expectations, Ankur demonstrates a genuine
                      commitment to his clients' needs, ensuring a smooth and
                      stress-free experience. His attention to detail, proactive
                      communication, and problem-solving skills make him a
                      valuable asset in the realm of visa services. Ankur's
                      remarkable performance reflects his passion for providing
                      top-notch assistance, and he undoubtedly deserves
                      recognition for his outstanding efforts."
                    >
                      Ankur's exceptional service in securing visa dates ahead
                      of schedule deserves high praise. His dedication and
                      professionalism shine through in his ability to expedite
                      the process efficiently and effectively. By going above
                      and beyond expectations, Ankur demonstrates a genuine
                      commitment to his clients' needs, ensuring a smooth and
                      stress-free experience. His attention to detail, proactive
                      communication, and problem-solving skills make him a
                      valuable asset in the realm of visa services. Ankur's
                      remarkable performance reflects his passion for providing
                      top-notch assistance, and he undoubtedly deserves
                      recognition for his outstanding efforts.
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-2 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={60}
                      src={stori_icon4}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">
                      Garv Agarwal
                    </p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5 className="text-white ff mb-0 fs_26 fw-bold">
                      Edify Group of Schools Hyderabad
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title=" The service provided by you has been a smooth process. The
                      best part being confidence given by you for receiving the
                      Visa has shown your professionalism. Would surely
                      recommend this company for any travel related
                      requirements."
                      className=" fs_18 text-white mt-3 mb-0 ff"
                    >
                      The service provided by you has been a smooth process. The
                      best part being confidence given by you for receiving the
                      Visa has shown your professionalism. Would surely
                      recommend this company for any travel related
                      requirements.
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={60}
                      src={stori_icon5}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">
                      Harsh Agarwal
                    </p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5 className="text-white ff mb-0 fs_26 fw-bold">
                      MANAGING DIRECTOR AT AIREN GROUP
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title="The level of professionalism from your assistance has been
                      exceptional. Thank you very much for all you and your
                      valuable staff had done for us."
                      className=" fs_18 text-white mt-3 mb-0 ff"
                    >
                      The level of professionalism from your assistance has been
                      exceptional. Thank you very much for all you and your
                      valuable staff had done for us.
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={61}
                      height={61}
                      src={slider_img4}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">
                      Harshit Kumar Garg
                    </p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5 className="text-white ff mb-0 fs_26 fw-bold">
                      Director, SRI BALAJI FORGINGS, Bhiwadi
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title="Honestly, I was lost when it came to applying for my USA
                      visa. Thank you Trip Studio team for being so patient and
                      knowledgeable. I am grateful for the guidance you gave me
                      throughout the process!"
                      className=" fs_18 text-white mt-3 mb-0 ff"
                    >
                      Honestly, I was lost when it came to applying for my USA
                      visa. Thank you Trip Studio team for being so patient and
                      knowledgeable. I am grateful for the guidance you gave me
                      throughout the process!
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="card rounded-4 p-md-4 p-2">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <img
                      className="rounded-5"
                      width={61}
                      height={61}
                      src={slider_img5}
                      alt="stori_icon"
                    />
                    <p className=" fs_26 mb-0 fw-bold color_blue">
                      Sanjeev Kumar Garg
                    </p>
                  </div>
                  <div
                    className="mt-4 rounded-4 p-3"
                    style={{ backgroundColor: "#273345" }}
                  >
                    <h5 className="text-white ff mb-0 fs_26 fw-bold">
                      Director, SBF ISPAT PVT LTD, Bhiwadi
                    </h5>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "300px", // Adjust width as needed
                        whiteSpace: "normal", // Allows wrapping to multiple lines
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title="I can't thank you enough for helping me with my
USA visa! I got my appointment in just 15 days, and you made everything so clear and easy. I really appreciate your support & services!"
                      className=" fs_18 text-white mt-3 mb-0 ff"
                    >
                      I can't thank you enough for helping me with my USA visa!
                      I got my appointment in just 15 days, and you made
                      everything so clear and easy. I really appreciate your
                      support & services!
                    </p>
                    <a href="#contact_form">
                      <Button
                        style={{
                          border: "2px solid white",
                          backgroundColor: "transparent",
                        }}
                        className="px-4  rounded-5 mt-md-4 mt-2 ff text-white fw-semibold py-2 "
                      >
                        Apply Now &nbsp; &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default RealStories;
