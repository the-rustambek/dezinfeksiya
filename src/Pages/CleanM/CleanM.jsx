import React from "react";
import "./CleanM.css";
import MPic from "../../assets/Image/cleanT.jpg";
import ThreeD from "../../assets/Image/d3icons.svg";

function CleanM() {
  return (
    <>
      <section className="cleanM">
        <div className="container">
          <div className="cleanM_flex">
              <div className="cleanM_left">
                <img className="cleanM_left_pic" src={MPic} alt="Picture" />
              </div>
            <div className="cleanM_right">
                <img className="threeD_image" src={ThreeD} alt="3D picture" />
                <h3 className="cleanM_title">
                  Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
                  talaygina
                </h3>
                <a href="#contact" className="cleanM_btn">
                  Bog’lanish
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CleanM;
