import React from "react";
import "./Footer.css";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { Fade } from "react-reveal";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer_flex">
            <a href="#">
              <h1 className="footer_logo">Logo</h1>
            </a>

            <div className="footer_right_div">
              <div className="footer_phone_adres">
                <Fade left >
                <a href="#">
                  <span className="fd_span">
                    <HiOutlineLocationMarker className="f_icon" />
                  </span>
                  <p className="fd_text">
                    Toshkent shahri Yashnabod tumani Mo’ljal Sergeli-4 bekat
                  </p>
                  <FiArrowUpRight className="fd_a_icon" />
                </a>
                </Fade>
                <Fade left >
                <a href="tel:+998901234567">
                  <span className="fd_span">
                    <HiOutlinePhone className="f_icon" />
                  </span>
                  <p className="fd_text">
                    +998 90 123 45 67
                  </p>
                  <FiArrowUpRight className="fd_a_icon" />
                </a>
                </Fade>
              </div>

              <div className="footer_social">
               <Fade bottom>
               <a className="f_social" href="https://facebook.com/" target="_blank">
                  Facebook <FiArrowUpRight className="fd_a_icon" />
                </a>
               </Fade>
                <Fade bottom>
                <a className="f_social" href="https://telegram.org/" target="_blank">
                  Telegram <FiArrowUpRight className="fd_a_icon" />
                </a>
                </Fade>
                <Fade bottom> 
                <a className="f_social" href="https://instagram.org/" target="_blank">
                  Instagram <FiArrowUpRight className="fd_a_icon" />
                </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
