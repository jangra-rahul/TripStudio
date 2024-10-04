import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import text_icon1 from "../assets/images/svg/text_icon1.svg";
import right_arrow from "../assets/images/svg/right_arrow.svg";
import left_arrow from "../assets/images/svg/left_blue_arrow.svg";
import stori_icon from "../assets/images/svg/stori_user_icon.svg";
import stori_icon1 from "../assets/images/svg/stori_user_icon1.svg";
import stori_icon2 from "../assets/images/svg/stori_user_icon2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider_img from "../assets/images/svg/slider_img.png";
import slider_img1 from "../assets/images/svg/slider_img1.png";
import slider_img2 from "../assets/images/svg/slider_img2.png";
import date_icon from "../assets/images/svg/date_icon.svg";
import user_icon from "../assets/images/svg/user_icon.svg";

const Discovery = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="px-3 pb-md-5">
      <div className="">
        <Container className="custom_container  rounded-5 ">
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div className="d-flex align-items-center gap-2">
              <img src={text_icon1} alt="" />
              <p className="mb-0 text-black ff">Recent Blogs</p>
            </div>
            <div className="d-md-flex align-items-center mt-4 justify-content-between">
              <h3 className=" fs_50 ff fw-bold text-black">
                Journeys of Discovery<br></br> Uncovering Hidden
              </h3>
              <div className="d-flex mt-3 mt-md-0 align-items-center gap-3">
                <img
                  style={{ cursor: "pointer" }}
                  onClick={handlePrev}
                  src={left_arrow}
                  alt="left_arrow"
                />
                <img
                  src={right_arrow}
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                  alt="right_arrow"
                />
              </div>
            </div>

            <Slider {...settings} ref={sliderRef} className="mt-5">
              {/* Card 1 */}
              <div className="px-2">
                <div className="card rounded-4 rounded-5">
                  <img src={slider_img} alt="slider_img" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <img src={date_icon} alt="date_icon" />
                        <p className="mb-0">October 4, 2024</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <img src={user_icon} alt="date_icon" />
                        <p className="mb-0">By Trip Studio</p>
                      </div>
                    </div>{" "}
                    <h4 className=" ff fw-bold  mt-3 fs_19 ">
                      The Ultimate Guide to Fast-Track Your USA Visa Approval
                    </h4>
                    <p className=" fs_15 color_gray">
                      Discover expert tips and strategies to speed up your USA
                      visa process and...
                    </p>
                    <span className=" color_blue fw-bold ff">
                      Read More &nbsp; &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="px-2">
                <div className="card rounded-4 rounded-5">
                  <img src={slider_img1} alt="slider_img" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <img src={date_icon} alt="date_icon" />
                        <p className="mb-0">October 4, 2024</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <img src={user_icon} alt="date_icon" />
                        <p className="mb-0">By Trip Studio</p>
                      </div>
                    </div>{" "}
                    <h4 className=" ff fw-bold  mt-3 fs_19 ">
                      The Ultimate Guide to Fast-Track Your USA Visa Approval
                    </h4>
                    <p className=" fs_15 color_gray">
                      Discover expert tips and strategies to speed up your USA
                      visa process and...
                    </p>
                    <span className=" color_blue fw-bold ff">
                      Read More &nbsp; &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="px-2">
                <div className="card rounded-4 rounded-5">
                  <img src={slider_img2} alt="slider_img" />
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <img src={date_icon} alt="date_icon" />
                        <p className="mb-0">October 4, 2024</p>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <img src={user_icon} alt="date_icon" />
                        <p className="mb-0">By Trip Studio</p>
                      </div>
                    </div>{" "}
                    <h4 className=" ff fw-bold  mt-3 fs_19 ">
                      The Ultimate Guide to Fast-Track Your USA Visa Approval
                    </h4>
                    <p className=" fs_15 color_gray">
                      Discover expert tips and strategies to speed up your USA
                      visa process and...
                    </p>
                    <span className=" color_blue fw-bold ff">
                      Read More &nbsp; &rarr;
                    </span>
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

export default Discovery;
