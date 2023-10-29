import React from "react";
import "./Contact.css";
import CImg from "../../assets/Image/contact.png";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact_flex">
            <Fade left>
              <div className="contact_left">
                <h2 className="contact_title">Malumotingizni qoldiring</h2>
                <form className="contact_form">
                  <input
                    className="contact_input"
                    type="text"
                    placeholder="Ism"
                  />
                  <input
                    className="contact_input"
                    type="text"
                    placeholder="+998"
                  />
                  <button className="contact_send_btn">Yuborish</button>
                </form>
              </div>
            </Fade>
            <div className="contact_right">
              <img className="contact_img" src={CImg} alt="pic" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
