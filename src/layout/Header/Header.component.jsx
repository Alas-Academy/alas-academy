import React, { useEffect, useState } from "react";
import { HeaderStyled, DropdownContent } from "./Header.styles";
import HeaderTopBar from "../../components/HeaderTopBar/HeaderTopBar.component";
import SearchPopup from "../../components/SearchPopup/SearchPopup.component";
import Offcanvas from "../../components/Offcanvas/Offcanvas.component";
import Courses from "../../components/Courses/Courses.component";

import { FaAngleDown, FaSistrix, FaBars } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import UseSticky from "../../hooks/use-sticky";
import Logo from "../../assets/img/alas-logo.png";

import "reactjs-popup/dist/index.css";
import { NavLink, useHref } from "react-router-dom";

const subMenuAnimate = {
  enter: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },

  exit: {
    y: -15,
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isDesktopXl = useMediaQuery({ minWidth: 1199 });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { isSticky } = UseSticky();
  const [isHover, toggleHover] = useState(false);
  const [isPageMain, setIsPageMain] = useState(false);
  const to = useHref();

  const toggleHoverMenu = () => toggleHover(!isHover);

  useEffect(() => {
    setIsPageMain(to === "/");
  }, [to]);

  return (
    <HeaderStyled className={isSticky ? "fixed" : ""}>
      {isDesktop && isPageMain && <HeaderTopBar />}

      <div className={`header-navbar ${isSticky ? "navbar-sticky" : ""}`}>
        <div className="header-brand">
          <a className="logo" href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        {isDesktopXl && (
          <nav className="header-mainnav">
            <ul className="mainmenu">
              <li className="menu-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Ana S??hif??
                </NavLink>
              </li>
              <motion.li
                className="menu-itemdropdown"
                onHoverStart={toggleHoverMenu}
                onHoverEnd={toggleHoverMenu}
              >
                <a href="#courses">
                  T??dris Proqramlar??m??z <FaAngleDown />
                </a>
                <motion.div
                  className="dropdown"
                  initial="exit"
                  animate={isHover ? "enter" : "exit"}
                  variants={subMenuAnimate}
                >
                  <DropdownContent>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/suni-intellekt"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        S??ni ??ntellekt
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/data-science"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Data Science
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/data-analitika"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Data Analitika
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/kiber-tehlukesizlik"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Kiber T??hl??k??sizlik
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/backend-proqramlasdirma"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Back-End Proqramla??d??rma
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tedris-proqramlarimiz/frontend-proqramlasdirma"
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Front-End Proqramla??d??rma
                      </NavLink>
                    </li>
                  </DropdownContent>
                </motion.div>
              </motion.li>
              <li className="menu-item">
                <a href="#about">Haqq??m??zda</a>
              </li>

              <li className="menu-item">
                <NavLink
                  to="/elaqe"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  ??laq??
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        <ul className="header-right">
          <li onClick={() => setIsSearchOpen(true)}>
            <FaSistrix size={25} />
          </li>
          {!isDesktopXl && (
            <li onClick={() => setIsOffcanvasOpen(true)}>
              <FaBars size={22} />
            </li>
          )}
        </ul>
      </div>

      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {!isDesktopXl && (
        <Offcanvas
          isOffcanvasOpen={isOffcanvasOpen}
          setIsOffcanvasOpen={setIsOffcanvasOpen}
        />
      )}
    </HeaderStyled>
  );
};

export default Header;
