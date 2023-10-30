import React from "react";
import "./CleanH.css";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

function CleanH() {

  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="clean-h">
        <div className="container">
          <div className="clean-h_flex">
            <div className="clean-h_tr"></div>
            <div className="clean_info_fath">
            <ScrollAnimation animateIn="bounceInRight" duration={1}>
            <h2 className="clean-h_title">
                {t("cleanhtitle")}
              </h2>
            </ScrollAnimation>
             
            <ScrollAnimation animateIn="bounceInRight" duration={1.1}>
            <p className="clean-h_text">
                {t("cleanhtext")}
              </p>
            </ScrollAnimation>
              

              <a className="clean-h_contact_link" href="#contact">
                {t("cleanhBtn")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CleanH;
