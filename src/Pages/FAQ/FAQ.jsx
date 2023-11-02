import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./FAQ.css";
import { useTranslation } from "react-i18next";

function FAQ() {

  const [t, i18next] = useTranslation();

  const faqData = [
    {
      id: 1,
      title: t("faqaccardionhead1"),
      descs: t("faqaccardionbody1"),
      handleFaq: false,
    },

    {
      id: 2,
      title: t("faqaccardionhead2"),
      descs: t("faqaccardionbody2"),
      handleFaq: false,
    },

    {
      id: 3,
      title: t("faqaccardionhead3"),
      descs: t("faqaccardionbody3"),
      handleFaq: false,
    },
  ];

  const [hadleFaq ,setHandleFaq] = useState(false);
  const [id, setId] = useState([])

  return (
    <>
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq_flex">
            <h2 className="faq_main_title">{t("faqtitle")}</h2>
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
