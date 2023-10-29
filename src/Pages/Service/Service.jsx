import React from "react";
import "./Service.css";
import { Fade } from "react-reveal";

function Service() {
  const serviceData = [
    {
      id: 1,
      title: "КЛOПЫ",
      desc: "Живут в постели, мягкой мебели, текстиле, под дверными коробами и оконными рамами. Питаются кровью людей и теплокровных животных. Провоцируют аллергию и сильный психологический дискомфорт.",
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/klopi-150x150.jpg",
    },
    {
      id: 2,
      title: "ТAРAКАНЫ",
      desc: "Переносят на себе возбудители болезней. Живут в щелях, под плинтусами, за мебелью, под ванной, под шкафами и пр. Питаются пищевыми продуктами, бытовыми отходами, кожаными изделиями, бумагой.",
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/tarakan-150x150.jpg",
    },
    {
      id: 3,
      title: "СКОРПИОН",
      desc: "Теплолюбивые существа, которые питаются насекомыми и паукообразными. Могут поселиться в сарае и доме, но чаще они встречаются в деревянных строениях.",
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/skarpion-150x150.jpg",
    },
    {
      id: 4,
      title: "ГРЫЗУНЫ",
      desc: "Самые распространенные — крысы и мыши. Они переносят на себе возбудители болезней, бегают по всем поверхностям, проделывают ходы в стенах и перекрытиях, снижая надежность строения. Питаются пищевыми продуктами и бытовыми отходами.",
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/grizuni-150x150.jpg",
    },
    {
      id: 5,
      title: "БЛОХИ",
      desc: "Попадают в дом на теле питомцев, мигрируют от соседей. Живут в мягкой мебели, постели, коврах, мягких игрушках, под плинтусами и рамами окон и дверей. Питаются кровью людей и животных. Переносят болезни.",
      picture:
        "https://dezfarma.uz/wp-content/uploads/2023/03/bloxi-150x150.jpg",
    },
  ];

  return (
    <>
      <section className="service" id="serv">
        <div className="container">
          <h2 className="service_title">Service</h2>
          <p className="service_min_inf">
            Beauty websites can cover everything from makeup and skincare
          </p>
          <div className="service_flex">
            {serviceData.map((items) => {
              return (
                <Fade bottom key={items.id}>
                  <a href="#" >
                    <div className="service_cards">
                      <h3 className="service_card_title">{items.title}</h3>
                      <p className="service_card_text">{items.desc}</p>
                      <div className="service_card_img_box">
                        <img
                          className="sercive_img"
                          src={items.picture}
                          alt="salom"
                        />
                      </div>
                    </div>
                  </a>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
