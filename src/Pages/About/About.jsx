import React from "react";
import "./About.css";
import { BsLightningCharge } from "react-icons/bs";
import { PiMedalDuotone } from "react-icons/pi";
import { MdOutlineHandshake } from "react-icons/md";
// import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function About() {

  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h2 className="about_title2">{t("abouttitle")}</h2>
          <div className="about_flex">
            {/* <Fade bottom> */}
            <div className="about_cards">
              <BsLightningCharge className="about_card_icon" />
              <h3 className="about_card_title">{t("aboutcardtitle1")}</h3>
              <p className="about_card_text">
              {t("aboutcardtext1")}
              </p>
            </div>
            {/* </Fade> */}

            {/* <Fade bottom> */}
            <div className="about_cards">
              <PiMedalDuotone className="about_card_icon" />
              <h3 className="about_card_title">{t("aboutcardtitle2")}</h3>
              <p className="about_card_text">
              {t("aboutcardtext2")}
              </p>
            </div>
            {/* </Fade> */}

            {/* <Fade bottom> */}
            <div className="about_cards cc">
              <MdOutlineHandshake className="about_card_icon" />
              <h3 className="about_card_title">{t("aboutcardtitle3")}</h3>
              <p className="about_card_text">
              {t("aboutcardtext3")}
              </p>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
