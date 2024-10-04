import React, { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import phone_icon from "../assets/images/svg/phone_icon.svg";
import lovtion_icon from "../assets/images/svg/loction_icon.svg";
import time_icon from "../assets/images/svg/time_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Started = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    travel_date: "",
    phone: "",
    message: "",
    email: "",
    city: "",
  });

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs
      .sendForm(
        "service_8j77cuu",
        "template_5l0z20k",
        form.current,
        "gYLsIBeeF02wyEvxp"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          toast.success("Your message has been sent successfully.");
          // Clear the form data after successful submission
          setFormData({
            from_name: "",
            travel_date: "",
            phone: "",
            message: "",
            email: "",
            city: "",
          });
        },
        (error) => {
          console.log("Failed to send email", error.text);
          toast.error(
            "An error occurred while sending your message. Please try again."
          );
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id="contact_form" className="px-3 pt-5">
      <ToastContainer />
      <Container
        style={{ backgroundColor: "#273345" }}
        className="custom_container p-md-5 p-3 rounded-5"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="row justify-content-center justify-content-between">
            <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="card p-4 rounded-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex flex-column">
                        <label
                          className="color_blue ff fw-semibold"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          id="from_name"
                          className="px-3 py-2 rounded-5 border-1 mt-2"
                          type="text"
                          name="from_name"
                          placeholder="Your Name"
                          required
                          value={formData.from_name} // Bind state to input
                          onChange={handleChange} // Handle change
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <div className="d-flex flex-column">
                        <label
                          className="color_blue ff fw-semibold"
                          htmlFor="date_of_travel"
                        >
                          Date of Travel
                        </label>
                        <input
                          className="px-3 w-100 py-2 rounded-5 border-1 mt-2"
                          type="date"
                          name="travel_date"
                          value={formData.travel_date} // Bind state to input
                          onChange={handleChange} // Handle change
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-3 ">
                      <div className="d-flex flex-column">
                        <label
                          className="color_blue ff fw-semibold"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          className="px-3 py-2 rounded-5 border-1 mt-2"
                          type="text"
                          name="phone"
                          placeholder="Enter Your Phone Number"
                          required
                          value={formData.phone} // Bind state to input
                          onChange={handleChange} // Handle change
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-3 ">
                      <div className="d-flex flex-column">
                        <label
                          className="color_blue ff fw-semibold"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="px-3 py-2 rounded-5 border-1 mt-2"
                          type="text"
                          name="email"
                          placeholder="Enter Your Email"
                          required
                          value={formData.email} // Bind state to input
                          onChange={handleChange} // Handle change
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3 ">
                      <div className="d-flex flex-column">
                        <label
                          className="color_blue ff fw-semibold"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          className="px-3 py-2 rounded-5 border-1 mt-2"
                          type="text"
                          name="city"
                          placeholder="Enter Your City"
                          required
                          value={formData.city} // Bind state to input
                          onChange={handleChange} // Handle change
                        />
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="d-flex flex-column">
                        <label
                          className="color_blue ff fw-semibold"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          cols={5}
                          rows={7}
                          name="message"
                          placeholder="Write Message.."
                          className="px-3 py-2 rounded-5 border-1 mt-2"
                          required
                          value={formData.message} // Bind state to input
                          onChange={handleChange} // Handle change
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="px-4 mt-4 w-100 rounded-5 border-0 ff text-white bg_orange fw-bold py-2"
                  >
                    Start My USA Visa Process
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-6 ps-md-4 mt-5 mt-md-0">
              <p className="text-white ff fs_14 text-white mb-0">
                Let’s Get You Started
              </p>
              <h4 className="text-white ff fs_50 fw-bold">
                Let’s Get You
                <br /> Started
              </h4>
              <p className="text-white ff fs_15 color_gray">
                Submit your details below, and we’ll reach out to guide
                <br />
                you through the process.
              </p>
              <div className="d-flex mt-5 gap-3 align-items-start">
                <img className="mt-2" src={phone_icon} alt="phone_icon" />
                <div>
                  <p className="ff mb-0 color_gray">Requesting A Call:</p>
                  <p className="ff text-white mb-0 color_blue mt-2">
                    +919800112233
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mt-4 align-items-start">
                <img className="mt-2" src={time_icon} alt="time_icon" />
                <div>
                  <p className="ff mb-0 color_gray">Open Hours:</p>
                  <p className="ff text-white mb-0 color_blue mt-2">
                    9 am - 8 pm
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mt-4 align-items-start">
                <img className="mt-2" src={lovtion_icon} alt="location_icon" />
                <div>
                  <p className="ff mb-0 color_gray">Location:</p>
                  <p className="ff text-white mb-0 color_blue mt-2">
                    7909, 3rd Floor,
                    <br /> DLF Phase IV, Sector 43, Gurugram,
                    <br /> Haryana 122002
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

export default Started;
