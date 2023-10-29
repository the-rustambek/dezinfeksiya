import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./FAQ.css";

function FAQ() {
  const [faqData, setFaqData] = useState([
    {
      id: 1,
      title: "Чем Производится Уничтожение Вредителей?",
      descs:
        "При помощи специального оборудования инсектициды превращаются в аэрозольный туман и проникают в мельчайшие зазоры между обоями, стенами и плинтусами, в невидимые глазу потенциальные «укрытия» насекомых. Преимущества метода заключаются также в высокой скорости обработки,",
      handleFaq: false,
    },

    {
      id: 2,
      title: "Опасны Ли Используемые Вами Препараты?",
      descs:
        "Для людей, домашних питомцев и растений препараты не представляют опасности. Но после обработки помещение необходимо всё же проветрить в течение 40 минут.",
      handleFaq: false,
    },

    {
      id: 3,
      title: "Мне Нужно Как-То Подготовить Свой Дом Для Обработки?",
      descs:
        "В основном нужно изолировать посуду и средства личной гигиены. Также нужно изолировать домашних животных на время обработки. Передвигать мебель и бытовую технику не требуется.",
      handleFaq: false,
    },
  ]);

  const [hadleFaq ,setHandleFaq] = useState(false);
  const [id, setId] = useState([])

  return (
    <>
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq_flex">
            <h2 className="faq_main_title">FAQ</h2>
            <div className="faq_acrr_div">
              {faqData.map((items) => {
                return (
                  <div className={`${id == items.id ? "openAcc" : null} accardion`} key={items.id}>
                    <div className="accardion_head" onClick={() => {
                            setHandleFaq(!hadleFaq)
                            setId(items.id);
                          }}>
                      <h4 className="faq_title">{items.title}</h4>
                      <div className="faq_icon_div">
                        <MdOutlineKeyboardArrowDown
                          className="faq_acc_icon"
                          
                        />
                      </div>
                    </div>
                    <div className="accardion_body">
                      <p className="faq_desc">{items.descs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
