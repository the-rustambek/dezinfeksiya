import React from "react";
import "./CleanH.css";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function CleanH() {

  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="clean-h">
        <div className="container">
          <div className="clean-h_flex">
            <div className="clean-h_tr"></div>
            <div className="clean_info_fath">
             <Fade bottom>
             <h2 className="clean-h_title">
                {t("cleanhtitle")}
              </h2>
             </Fade>
              <Fade bottom>
              <p className="clean-h_text">
                {t("cleanhtext")}
              </p>

              </Fade>
              <Fade bottom>
              <a className="clean-h_contact_link" href="#contact">
                {t("cleanhBtn")}
              </a>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CleanH;
