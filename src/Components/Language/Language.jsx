import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLngOne") || "ru"
      : "uz";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("i18nextLngOne", selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  const onChangeLanguage = (value) => {
    setSelectedLanguage(value);
  };



  return (
    <div className="custom-dropdown" onClick={toggleMenu}>
      {/* {isMenuOpen && (
        <div className="custom-dropdown-menu">
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage("uz")}>
            UZ
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage("ru")}>
            RU
          </div>
        </div>
      )} */}
      <select className="lang_option"  onChange={(e) => onChangeLanguage(e.target.value)}>
                  <option className="lang_option" value="ru">Русский</option>
                  <option className="lang_option" value="uz">Ўзбекча</option>
      </select> 
    </div>
  );
}

export default Language;