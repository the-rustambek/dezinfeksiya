import React from "react";
import "./CleanM.css";
import MPic from "../../assets/Image/cleanT.jpg";
import ThreeD from "../../assets/Image/d3icons.svg";
import ScrollAnimation from "react-animate-on-scroll";

function CleanM() {
  return (
    <>
      <section className="cleanM">
        <div className="container">
          <div className="cleanM_flex">
            <ScrollAnimation animateIn="bounceInLeft" duration={1}>
              <div className="cleanM_left">
                <img className="cleanM_left_pic" src={MPic} alt="Picture" />
              </div>
            </ScrollAnimation>
            <div className="cleanM_right">
              <ScrollAnimation animateIn="bounceInLeft" duration={1.2}>
                <img className="threeD_image" src={ThreeD} alt="3D picture" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInLeft" duration={1.3}>
                <h3 className="cleanM_title">
                  Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
                  talaygina
                </h3>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInLeft" duration={1.4}>
                <a href="#contact">
                  <button className="custom-btn_home btn-11_home">
                    Bog'lanish<div className="dot"></div>
                  </button>
                </a>
                {/* <a href="#contact" className="cleanM_btn">
                  Bog’lanish
                </a> */}
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CleanM;
