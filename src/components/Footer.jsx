import React from "react";
import facebook_icon from "../assets/images/svg/facebook_icon.svg";
import instagram_icon from "../assets/images/svg/instagram_icon.svg";
import x_icon from "../assets/images/svg/x_icon.svg";
import in_icon from "../assets/images/svg/in_icon.svg";

const Footer = () => {
  return (
    <div className="pt-5">
      <div className="py-4" style={{ backgroundColor: "#0063A6" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 12px" }}
        >
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="d-flex gap-4">
              <img
                width={20}
                height={20}
                src={facebook_icon}
                alt="facebook_icon"
              />
              <img width={20} src={instagram_icon} alt="instagram_icon" />
              <img width={20} src={x_icon} alt="x_icon" />
              <img width={20} src={in_icon} alt="in_icon" />
            </div>
            <p className=" text-white mt-3 mt-md-0 mb-0 ff fs_19">
              © Trip Studio 2024 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
