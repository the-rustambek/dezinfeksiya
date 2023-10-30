import React from "react";
import "./About.css";
import { BsLightningCharge } from "react-icons/bs";
import { PiMedalDuotone } from "react-icons/pi";
import { MdOutlineHandshake } from "react-icons/md";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

function About() {

  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <ScrollAnimation animateIn="flipInX">
          <h2 className="about_title2">{t("abouttitle")}</h2>
          </ScrollAnimation>
          <div className="about_flex">
            <ScrollAnimation animateIn="bounceInLeft" duration={1.2}>
            <div className="about_cards">
              <BsLightningCharge className="about_card_icon" />
              <h3 className="about_card_title">{t("aboutcardtitle1")}</h3>
              <p className="about_card_text">
              {t("aboutcardtext1")}
              </p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInLeft" duration={1.3} >
            <div className="about_cards">
              <PiMedalDuotone className="about_card_icon" />
              <h3 className="about_card_title">{t("aboutcardtitle2")}</h3>
              <p className="about_card_text">
              {t("aboutcardtext2")}
              </p>
            </div>
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="bounceInLeft" duration={1.4} >
            <div className="about_cards cc">
              <MdOutlineHandshake className="about_card_icon" />
              <h3 className="about_card_title">{t("aboutcardtitle3")}</h3>
              <p className="about_card_text">
              {t("aboutcardtext3")}
              </p>
            </div>
            </ScrollAnimation>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
