import React from "react";
import { Button, Container } from "react-bootstrap";
import setp_img from "../assets/images/png/satep_icon.png";
import six_icon from "../assets/images/svg/66_icon.svg";

const Steps = () => {
  return (
    <div>
      <div className="py-3" style={{ backgroundColor: "#273345" }}>
        <h4 className=" text-white ff mb-0  fs_26 text-center fw-bold">
          Start Your USA Journey Today – Limited Slots Available!"
        </h4>
      </div>
      <Container className="custom custom_container py-md-5">
        <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 mt-5 mt-md-0">
              <h4 className=" fs_50 ff fw-bold ">
                Easy Steps to Your USA Visa
              </h4>
              <img className="py-3" src={six_icon} alt="six_icon" />
              <h6 className=" fw-semibold fs_18 ff color_gray mb-0">
                1. Submit Your Details
              </h6>
              <p className="mb-0 ff color_gray">
                Simply fill out our form with basic information. It takes less
                than 2 minutes!
              </p>
              <h6 className=" mt-2 fw-semibold fs_18 ff color_gray mb-0">
                2. Let Us Do the Work
              </h6>
              <p className="mb-0 ff color_gray">
                Our experts will prepare your entire application and make sure
                it’s ready for submission.
              </p>
              <h6 className=" mt-2 fw-semibold fs_18 ff color_gray mb-0">
                3. Get Your Visa Approved
              </h6>
              <p className="mb-0 ff color_gray">
                Sit back and relax while we manage the process from start to
                finish. You’ll have your visa in no time
              </p>

              <a href="#contact_form">
                <Button className="px-4 mt-4 rounded-5 border-0 ff text-white  bg_orange fw-bold py-2 ">
                  Start Your Application &nbsp; &rarr;
                </Button>
              </a>
            </div>
            <div className="col-md-4 mt-5 mt-md-0">
              <img className="w-100" src={setp_img} alt="setp_img" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Steps;
