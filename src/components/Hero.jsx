import React from "react";
import { Button, Container } from "react-bootstrap";
import play_icon from "../assets/images/svg/play_icon.svg";
import hero_img from "../assets/images/png/hero_img.png";
import tavr_img from "../assets/images/svg/tavr_icon.png";
import light_tarvr from "../assets/images/svg/light_tavr.png";
const Hero = () => {
  return (
    <div className="pt-4">
      <Container className="custom_container">
        <div
          style={{
            backgroundColor: "#0063A6",
            zIndex: "9",
            position: "relative",
          }}
          className=" rounded-5 p-lg-5 pb-lg-0 p-4 pb-0"
        >
          <img
            width={300}
            className=" d-md-flex d-none position-absolute start-0 bottom-0"
            src={light_tarvr}
            alt="light_tarvr"
          />
          <div class="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <h2 className=" fs_80 ff text-white ">
                Say Goodbye <br className="fw-bold d-lg-block d-none"></br>to
                Visa Stress!
              </h2>
              <div className="d-sm-flex mt-lg-5 mt-4 gap-3 aligm-items-center">
                <a href="#contact_form">
                  <Button
                    style={{ border: "2px solid transparent" }}
                    className="text-white p-3 py-2 rounded-5 fs_14 ff bg_orange fw-bold"
                  >
                    Get on a One-on-one call &nbsp; &rarr;
                  </Button>
                </a>
                <a href="#contact_form">
                  <Button className="mt-3 mt-sm-0 text-white p-3 fw-semibold  py-2 rounded-5 fs_14 ff border bg-transparent">
                    Enquire now
                  </Button>
                </a>
                {/* <div className="d-flex mt-3 mt-lg-0 gap-3 align-items-center">
                  <span
                    className=" rounded-5 d-flex align-items-center"
                    style={{ backgroundColor: "#1973AF", padding: "13px 15px" }}
                  >
                    <img src={play_icon} alt="play_icon" />
                  </span>

                  <p className="mb-0 text-white fs_18 ff">Watch Our Videos</p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0 position-relative">
              <img className="w-100 " src={hero_img} alt="hero_img" />
              <img
                width={300}
                style={{ right: "-150px", top: "120px", zIndex: "-1" }}
                className=" position-absolute d-md-flex d-none"
                src={tavr_img}
                alt="tavr_img"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
