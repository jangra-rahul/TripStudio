import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa"; // You can use React Icons for arrow and icons
import visa_image from "../assets/images/png/visa_image1.png";
import visa_image2 from "../assets/images/png/visa_image2.png";
import visa_image3 from "../assets/images/png/visa_image3.png";
import icon from "../assets/images/svg/icon.svg";
import icon1 from "../assets/images/svg/icon1.svg";
import visa_logo from "../assets/images/svg/visa.png";
import visa_logo1 from "../assets/images/svg/visa1.png";
import visa_logo2 from "../assets/images/svg/visa2.png";
import visa_logo3 from "../assets/images/svg/visa3.png";
import visa_logo4 from "../assets/images/svg/visa4.png";
import visa_logo5 from "../assets/images/svg/visa5.png";
import visa_logo6 from "../assets/images/svg/visa6.png";
import visa_logo7 from "../assets/images/svg/visa7.jpg";
import visa_logo8 from "../assets/images/svg/visa8.png";
import visa_logo9 from "../assets/images/svg/visa9.png";
import visa_logo10 from "../assets/images/svg/visa10.png";
import Slider from "react-slick";

const VisaProcessCards = () => {
  const cardData = [
    {
      title: "End-to-End Assistance",
      image: visa_image,
      description: "We handle everything, from paperwork to submission.",
      imgSrc: "path-to-your-image1",
      icon: <FaArrowRight />,
      image: visa_image,
    },
    {
      title: "Fast-Track Approvals",
      description: "Get your visa processed faster with expert help.",
      imgSrc: "path-to-your-image2",
      icon: <FaArrowRight />,
      image: visa_image2,
    },
    {
      title: "Avoid Rejections",
      description:
        "Our team ensures your application is perfect—right from the start.",
      imgSrc: "path-to-your-image3",
      icon: <FaArrowRight />,
      image: visa_image3,
    },
  ];

  const visaLogos = [
    visa_logo,
    visa_logo1,
    visa_logo2,
    visa_logo3,
    visa_logo4,
    visa_logo5,
    visa_logo6,
    visa_logo7,
    visa_logo8,
    visa_logo9,
    visa_logo10,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="py-5 custom_container">
      <h3 className="text-center ff fs_50 fw-bold">
        Visa Process Confusing?<br></br> We’re Here to Simplify It!
      </h3>
      <Row className="mt-4">
        {cardData.map((card, index) => (
          <Col key={index} lg={4} className="my-4 mt-md-4 mt-0 col-md-6 col-12">
            <div className="border h-100 p-2 rounded-4">
              <div className="d-flex gap-3 align-items-md-center align-items-start">
                <img
                  height={190}
                  className="custom_width object-fit-cover rounded-3"
                  src={card.image}
                  alt="image"
                />
                <div className="">
                  <h4 className=" fs_26  ff color_blue fw-bold">
                    {card.title}
                  </h4>
                  <p className=" color_gray ff fs_15 ">{card.description}</p>
                  <div className="d-flex pb-3 pe-4 mt-4 align-items-center justify-content-between">
                    {/* <img width={40} src={icon} alt="icon" /> */}
                    <img width={30} src={icon1} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="py-md-5 py-3">
        <div className="visa-slider-container">
          <div className="visa-slider">
            {visaLogos.map((logo, index) => (
              <div key={index} className="visa-logo">
                <img
                  width={200}
                  className="object-fit-cover"
                  src={logo}
                  alt={`visa_logo_${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VisaProcessCards;
