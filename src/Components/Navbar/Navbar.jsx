import React, { useContext, useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [handleMenu, setHandleMenu] = useState(false);
  const [handleNav, setHandleNav] = useState(false);
  const TT = 60;
  const [t, i18next] = useTranslation();

  const navLinks = [
    {
      title: t("navlink1"),
      links: "main",
    },
    {
      title: t("navlink2"),
      links: "about",
    },
    {
      title: t("navlink3"),
      links: "serv",
    },
    {
      title: t("navlink4"),
      links: "faq",
    },
  ];

  window.addEventListener("scroll", () => {
    Number(scrollY) > Number(TT) ? setHandleNav(true) : setHandleNav(false);
  });

  return (
    <>
      <section className={`${handleNav ? "navbar_active" : null} navbar`}>
        <div className="container">
          <div className="navbar_flex">
            <a className="nav_logo_link" href="#main">
              Logo
            </a>

            <div className="nav_rigth_box">
              <div className={`${handleMenu ? "handle" : null} navigations`}>
                <button
                  className="close_menu"
                  onClick={() => setHandleMenu(!handleMenu)}
                >
                  <MdClose className="close_icon" />
                </button>
                {navLinks.map((items, index) => (
                  <a
                    key={index}
                    href={`#${items.links}`}
                    className="nav_links"
                    onClick={() => setHandleMenu(!handleMenu)}
                  >
                    {items.title}
                  </a>
                ))}

                <a
                  className="phone_btn_link gg"
                  href="#contact"
                  onClick={() => setHandleMenu(!handleMenu)}
                >
                  {t("navBtn")}
                </a>
              </div>

              <div className="navbar_lang_and_btn_div">
                <Language />
                {/* This is langauge dropdown path */}
                <div
                  className={`${
                    handleMenu ? "dark_div_active" : null
                  } dark_div`}
                  onClick={() => setHandleMenu(!handleMenu)}
                ></div>
                <a className="phone_btn_link gg1" href="#contact">
                  {t("navBtn")}
                </a>
                <button
                  className="open_menu"
                  onClick={() => setHandleMenu(!handleMenu)}
                >
                  <RxHamburgerMenu className="open_icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
