import React from "react";
import "./CleanM.css";
import MPic from "../../assets/Image/cleanT.jpg";
import ThreeD from "../../assets/Image/d3icons.svg";
// import { Fade } from "react-reveal";

function CleanM() {
  return (
    <>
      <section className="cleanM">
        <div className="container">
          <div className="cleanM_flex">
            {/* <Fade left> */}
              <div className="cleanM_left">
                <img className="cleanM_left_pic" src={MPic} alt="Picture" />
              </div>
            {/* </Fade> */}
            <div className="cleanM_right">
              {/* <Fade right> */}
                <img className="threeD_image" src={ThreeD} alt="3D picture" />
              {/* </Fade> */}
              {/* <Fade right> */}
                <h3 className="cleanM_title">
                  Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
                  talaygina
                </h3>
              {/* </Fade> */}
              {/* <Fade right> */}
                <a href="#contact" className="cleanM_btn">
                  Bog’lanish
                </a>
              {/* </Fade> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CleanM;
