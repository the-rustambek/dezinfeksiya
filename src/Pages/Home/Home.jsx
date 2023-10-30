import React, { useTransition } from "react";
import "./Home.css";
import MiniPic from "../../assets/Image/diz-main.png";
import HeroPic from "../../assets/Image/hero.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  const [t, i18next] = useTranslation();

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home_flex">
            <div className="home_left">
              <div className="home_hero_top">
                <ScrollAnimation animateIn="bounceInLeft">
                <h1 className="home_title">{t("hometitle")}</h1>
                </ScrollAnimation>
                <p className="home_info">{t("homedesc")}</p>
                <div className="mini_pic_home">
                  <img
                    className="mini_home_img"
                    src={MiniPic}
                    alt="mini main image"
                  />
                </div>
              </div>

              <a className="hero_contact_el" href="#contact">
                <h4 className="hero_contact_text">{t("homeBtn")}</h4>
                <span className="hero_contact_icon">
                  <FiArrowUpRight />
                </span>
              </a>
            </div>

            <div className="home_right">
              <img className="home_rightpic" src={HeroPic} alt="Main image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
