import React from "react";
import choose_trip_icon from "../assets/images/svg/choose_trip_icon1.svg";
import choose_trip_icon1 from "../assets/images/svg/choose_trip_icon2.svg";
import choose_trip_icon2 from "../assets/images/svg/choose_trip_icon3.svg";
import { Container } from "react-bootstrap";

const ChooseTripStudio = () => {
  return (
    <div className="pb-5">
      <Container className="custom_container py-md-5">
        <h3 className="text-center ff fw-bold fs_50">
          Why Choose Trip Studio?
        </h3>
        <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
          <div className="row mt-md-4">
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  width={120}
                  src={choose_trip_icon}
                  alt="choose_trip_icon"
                />
                <div>
                  <h4 className=" fs_26 ff color_blue fw-bold mb-0">
                    Experts Who Care
                  </h4>
                  <p className="mb-0 mt-2 color_gray ff fs_18">
                    We’ve helped thousands of travelers achieve their USA dreams
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  width={120}
                  src={choose_trip_icon1}
                  alt="choose_trip_icon"
                />
                <div>
                  <h4 className=" fs_26 ff color_blue fw-bold mb-0">
                    Real-Time Updates
                  </h4>
                  <p className="mb-0 mt-2 color_gray ff fs_18">
                    Know exactly where your application stands, no more
                    uncertainty.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  width={120}
                  src={choose_trip_icon2}
                  alt="choose_trip_icon"
                />
                <div>
                  <h4 className=" fs_26 ff color_blue fw-bold mb-0">
                    Affordable & Transparent
                  </h4>
                  <p className="mb-0 mt-2 color_gray ff fs_18">
                    No hidden fees—just clear, simple pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseTripStudio;
