import React from "react";
import "./Service.css";
import Dizinfek from "../../assets/Image/dizinfeksiya.png";
import Dizinyeksiya from "../../assets/Image/dezinyeksiya.png";
import Derazatsiya from "../../assets/Image/derazatsiya.png";
import ScrollAnimation from "react-animate-on-scroll";
import { useTranslation } from "react-i18next";

function Service() {

  const [t, i18next] = useTranslation();

  const serviceData = [
    {
      id: 1,
      title: t("servicetypecardtitle1"),
      desc: t("servicetypecardtext1"),
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/klopi-150x150.jpg",
      duration: 1.5,
    },
    {
      id: 2,
      title: t("servicetypecardtitle2"),
      desc: t("servicetypecardtext2"),
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/tarakan-150x150.jpg",
      duration: 1.6,
    },
    {
      id: 3,
      title: t("servicetypecardtitle3"),
      desc: t("servicetypecardtext3"),
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/skarpion-150x150.jpg",
      duration: 1.7,
    },
    {
      id: 4,
      title: t("servicetypecardtitle4"),
      desc: t("servicetypecardtext4"),
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/grizuni-150x150.jpg",
      duration: 1.8,
    },
    {
      id: 5,
      title:  t("servicetypecardtitle5"),
      desc:  t("servicetypecardtext5"),
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/bloxi-150x150.jpg",
      duration: 1.9,
    },
  ];

  return (
    <>
      <section className="service" id="serv">
        <div className="container">
          <ScrollAnimation animateIn="flipInX" duration={1}>
            <h2 className="service_title">{t("servicetitle")}</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInX" duration={1.1}>
            <p className="service_min_inf">
              {t("servicetext")}
            </p>
          </ScrollAnimation>

          <div className="top_service_flex">
            <ScrollAnimation animateIn="bounceInLeft" duration={1.2}>
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={Dizinfek} alt="" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    {t("servicecardtitle1")}
                  </h3>
                  <p className="topser_card_text">
                    {t("servicecardtext1")}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInLeft" duration={1.3}>
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={Dizinyeksiya} alt="" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                  {t("servicecardtitle2")}
                  </h3>
                  <p className="topser_card_text">
                  {t("servicecardtext2")}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="bounceInLeft" duration={1.4}>
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={Derazatsiya} alt="" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                  {t("servicecardtitle3")}
                  </h3>
                  <p className="topser_card_text">
                  {t("servicecardtext3")}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animateIn="flipInX">
            <h2 className="service_title">{t("servicetype")}</h2>
          </ScrollAnimation>
          <div className="service_flex">
            {serviceData.map((items) => {
              return (
                <ScrollAnimation
                  key={items.id}
                  animateIn="bounceInLeft"
                  delay={items.duration}
                >
                  <span key={items.id}>
                    <div className="service_cards">
                      <div>
                        <h3 className="service_card_title">{items.title}</h3>
                        <p className="service_card_text">{items.desc}</p>
                      </div>
                      {/* <a className="service_card_btn" href="#contact">Buyurtma</a> */}
                      <a href="#contact">
                        <button className="custom-btn_ser-card btn-11_ser-card service_card_btn">
                          {t("cleanhBtn")}<div className="dot"></div>
                        </button>
                      </a>
                      <div className="service_card_img_box">
                        <img
                          className="sercive_img"
                          src={items.picture}
                          alt="salom"
                        />
                      </div>
                    </div>
                  </span>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
