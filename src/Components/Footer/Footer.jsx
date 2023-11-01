import React from "react";
import "./Footer.css";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import ScrollAnimation from "react-animate-on-scroll";
import { BiPhone } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import LogoFooter from "../../assets/Image/dez_logo2.png";

function Footer() {


  const [t, i18next] = useTranslation();
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer_flex">
            <a href="#" className="footer_logo_link">
              <img className="logo_pic" src={LogoFooter} alt="This is the footer logo" />
            </a>

            <div className="footer_right_div">
              <div className="footer_phone_adres">
                <ScrollAnimation animateIn="bounceInLeft" duration={1.1}>
                <a href="#">
                  <span className="fd_span">
                    <HiOutlineLocationMarker className="f_icon" />
                  </span>
                  <p className="fd_text">
                    {t("footeradress01")}
                  </p>
                  <FiArrowUpRight className="fd_a_icon" />
                </a>
                </ScrollAnimation>
            
                <ScrollAnimation animateIn="bounceInLeft" duration={1.2}>
                <a href="tel:+998901234567">
                  <span className="fd_span">
                    <HiOutlinePhone className="f_icon" />
                  </span>
                  <p className="fd_text">
                    +998 90 821 84 84 
                  </p>
                  <FiArrowUpRight className="fd_a_icon" />
                </a>
                </ScrollAnimation>
              </div>
              {/* <div className="footer_social">
               <ScrollAnimation animateIn="bounceInLeft" duration={1.3}>
               <a className="f_social" href="https://facebook.com/" target="_blank">
                  {t("footersocialf")} <FiArrowUpRight className="fd_a_icon" />
                </a>
               </ScrollAnimation>
               
                <ScrollAnimation animateIn="bounceInLeft" duration={1.4}> 
                <a className="f_social" href="https://t.me/dezinfeksiya_tashkent1" target="_blank">
                  {t("footersocialt")} <FiArrowUpRight className="fd_a_icon" />
                </a>
                </ScrollAnimation>
               
                <ScrollAnimation animateIn="bounceInLeft" duration={1.5}>
                <a className="f_social" href="https://instagram.org/" target="_blank">
                  {t("footersociali")} <FiArrowUpRight className="fd_a_icon" />
                </a>
                </ScrollAnimation>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <a href="tel:+998908218484" rel="nofollow" class="btn-call">
	  	<div class="btn-call__ico">
        <BiPhone />
	  	</div>
	  </a>
    </>
  );
}

export default Footer;
