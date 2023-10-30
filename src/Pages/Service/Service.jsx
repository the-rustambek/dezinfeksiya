import React from "react";
import "./Service.css";
import { Fade } from "react-reveal";
import Dizinfek from "../../assets/Image/dizinfeksiya.png";
import Dizinyeksiya from "../../assets/Image/dezinyeksiya.png";
import Derazatsiya from "../../assets/Image/derazatsiya.png";

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

          <div className="top_service_flex">
            <div className="top_ser_cards">
              <img className="topser_card_pic" src={Dizinfek} alt="" />
              <div className="topser_card_right">
                <h3 className="topser_card_title">
                  Дезинфекция – Уничтожить Вредоносные Микроорганизмы
                </h3>
                <p className="topser_card_text">
                  Главная задача любой дезинфекции уничтожить опасные
                  микроорганизмы, способные вызывать инфекции и заболевания.
                  Дезинфекционные мероприятия избавляют пространство от плесени,
                  вирусов, грибка, бактерий. Процедура очищает среду от
                  патогенных организмов, способных возбуждать развитие
                  инфекционных болезней, токсикацию. Если вы беспричинно
                  чувствуете недомогание, утомление, слабость, необходимо
                  вызвать дезинфекторов.
                </p>
              </div>
            </div>

            <div className="top_ser_cards">
              <img className="topser_card_pic" src={Dizinyeksiya} alt="" />
              <div className="topser_card_right">
                <h3 className="topser_card_title">
                  Дезинсекция – Уничтожение Насекомых
                </h3>
                <p className="topser_card_text">
                  Со словом «дезинсекция» многие впервые сталкиваются, когда
                  ищут способ избавиться от нежелательных соседей – клопов,
                  тараканов, муравьев и других насекомых. Они сами по себе
                  неприятны, к тому же еще известные переносчики инфекций.
                  Дезинсекция – это уничтожение насекомых: комаров, мух, клопов,
                  тараканов, моли, клещей, короедов, мокриц и прочих ползающих и
                  летающих. Наравне с дератизацией, обработка производится с
                  помощью специнструмента, к которому относятся генераторы
                  холодного и горячего тумана, а так же профессиональных
                  инсектицидов.
                </p>
              </div>
            </div>
            <div className="top_ser_cards">
              <img className="topser_card_pic" src={Derazatsiya} alt="" />
              <div className="topser_card_right">
                <h3 className="topser_card_title">
                  Дератизация — Уничтожению Грызунов.
                </h3>
                <p className="topser_card_text">
                  Дератизация в Ташкенте представляет собой целый комплекс
                  сложных мер, направленных на уничтожение грызунов. Как
                  известно, грызуны являются довольно выносливыми существами,
                  которые отлично справляются с различного рода опасными
                  воздействиями. Именно поэтому, чтобы их уничтожить необходимо
                  использовать целый ряд методов. Дератизация в Ташкенте
                  производится везде, где появились грызуны: многоэтажных
                  зданиях, складах, магазинах, заведениях общепита, частных
                  домах, на приусадебных участках. Применение по определенной
                  схеме специальных химических препаратов приводит к постепенной
                  гибели этих вредных особей.
                </p>
              </div>
            </div>
          </div>

          <h2 className="service_title">Info</h2>
          <div className="service_flex">
            {serviceData.map((items) => {
              return (
                <span key={items.id}>
                  <div className="service_cards">
                    <div>
                      <h3 className="service_card_title">{items.title}</h3>
                      <p className="service_card_text">{items.desc}</p>
                    </div>
                    <a className="service_card_btn" href="#contact">
                      Buyurtma
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
