import React, { createContext, useEffect, useState } from "react";
import TDATA from "../../assets/Data/DataLang.json";
export const Context = createContext({});

function ContextProvider({ children }) {
  const [langData, setLangData] = useState(TDATA.uz);
  const [langW, setLangW] = useState("uz");

  const langArr = ["uz", "en"];

  useEffect(() => {
    function changeLang(lang) {
        setLangW(lang);
        if (langW == langArr[0]) {
          setLangData(TDATA.uz);
        } else if (langW == langArr[1]) {
          setLangData(TDATA.en);
        }
      }
  })

  return (
    <Context.Provider
      value={{
        changeLang,
        langData
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
