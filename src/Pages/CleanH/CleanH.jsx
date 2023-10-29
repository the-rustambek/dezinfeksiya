import React from "react";
import "./CleanH.css";
import { Fade } from "react-reveal";

function CleanH() {
  return (
    <>
      <section className="clean-h">
        <div className="container">
          <div className="clean-h_flex">
            <div className="clean-h_tr"></div>
            <div className="clean_info_fath">
             <Fade bottom>
             <h2 className="clean-h_title">
                Klapa va zararli hashorot endi yo’q deb hisoblang !!!
              </h2>
             </Fade>
              <Fade bottom>
              <p className="clean-h_text">
                Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan
                kompaniyamiz Mijozlarimiz bizdan mamnun
              </p>

              </Fade>
              <Fade bottom>
              <a className="clean-h_contact_link" href="#">
                Bog’lanish
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
