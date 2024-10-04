import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import necessary components from React Bootstrap
import logo from "../assets/images/svg/logo.svg";

const Header = ({ displaynone, dlgflex, dlgnone }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  useEffect(() => {
    if (sidebarVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [sidebarVisible]);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id) => (event) => {
    event.preventDefault();
    scrollToSection(id);
  };
  return (
    <div className="bg-white  pt-3">
      <Container className="custom_container">
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <img width={100} className="mb-2" src={logo} alt="logo" />
          </Col>
          <Col xs="auto" className="d-flex align-items-center ">
            <div
              className={`navmanu d-lg-none position-relative custom_zindex d-block burger  ${
                sidebarVisible ? "active" : ""
              }`}
              onClick={toggleSidebar}
            >
              <div></div>
              <div className=""></div>
              <div></div>
            </div>

            <a href="#contact_form">
              <Button className="px-4 ms-3 d-lg-block d-none rounded-5 border-0 ff text-white  bg_orange fw-bold py-2 ">
                Start Your Application &nbsp; &rarr;
              </Button>
            </a>
          </Col>
          {sidebarVisible && (
            <div
              className={`sidebar d-flex flex-column justify-content-center align-items-center  ${
                sidebarVisible ? "show " : "hide"
              }`}
            >
              <div className="d-lg-none d-flex  align-items-center gap-5 text-center">
                <ul className="ps-0 gap-4 flex-column mb-0 d-flex pe-md-4 align-items-center ff">
                  <a href="#contact_form">
                    <Button
                      onClick={toggleSidebar}
                      className="px-4 ms-3 d-lg-none d-black rounded-5 border-0 ff text-white  bg_orange fw-bold py-2 "
                    >
                      Start Your Application &nbsp; &rarr;
                    </Button>
                  </a>
                </ul>
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Header;
