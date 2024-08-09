import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";

import styles from "./Header.module.css";

import logoImage from "../../assets/imgs/download.png";
import logoImage2 from "../../assets/imgs/download1.png";

import Fade from "react-reveal/Fade";
import LogoGreenMakkah from "../../common/LogoGreenMakkah";
import LogoWhiteMakkah from "../../common/LogoWhiteMakkah";

const NAV_LINKS = [
  { path: "/الرئيسية", label: "الرئيسية" },
  { path: "/عن_بوابة_أخضر_مكة", label: "عن بوابة أخضر مكة" },
  { path: "/المركزالإعلامي", label: "المركز الإعلامي" },
  { path: "/دليل_النباتات", label: "دليل النباتات" },
  { path: "/النباتات والأبحاث", label: "النباتات والأبحاث" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollThreshold = 66;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const logo = isScrolled ? logoImage2 : logoImage;
  const LogoComponent = isScrolled ? LogoGreenMakkah : LogoWhiteMakkah;

  return (
    <Navbar
      className={`${styles.nav} ${
        isScrolled ? styles.navScrolled : styles.navTransparent
      }`}
      variant="dark"
      fixed="top"
      expand="lg"
      collapseOnSelect
    >
      <Fade right>
        <Navbar.Brand className={styles.navbarBrand}>
          <LogoComponent styles={styles.desktopSVG} />
          <LogoGreenMakkah styles={styles.mobileSVG} />

          <div className={styles.logo}>
            <Link to="/">
              <img
                className={`${styles.logoImg} ${
                  isScrolled ? styles.scrolled : ""
                }`}
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
        </Navbar.Brand>
      </Fade>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className={styles.customToggler}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`ml-auto ${styles.navLinks}`}>
          {NAV_LINKS.map(({ path, label }) => (
            <Nav.Link
              as={NavLink}
              to={path}
              exact
              activeClassName={styles.activeLink}
              key={path}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
        <Nav.Link as={NavLink} to="/الدخول" activeClassName="active">
          <div className={styles.login_in}>
            <IoMdPerson />
            <span>الدخول</span>
          </div>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
