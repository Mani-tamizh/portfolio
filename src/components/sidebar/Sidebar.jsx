import React, { useState, useEffect, useContext } from 'react';
import '../../assets/styles/sidebar.css';
import Logo from "../../assets/logo.svg";
import { ThemeContext } from '../ThemeContext';
import MaterialUISwitch from '../../MaterialUI/MaterialUISwitch';
const Sidebar = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const { toggleTheme, theme } = useContext(ThemeContext);
  const [toggle, showMenu] = useState(false)

  const navItems = [
    { href: "#home", icon: "icon-home" },
    { href: "#about", icon: "icon-user-following" },
    { href: "#services", icon: "icon-briefcase" },
    { href: "#resume", icon: "icon-graduation" },
    { href: "#work", icon: "icon-layers" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index); // highlight on click
  };

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const sectionIndices = navItems.map((item, index) => {
        const section = document.querySelector(item.href);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionTop = window.scrollY + top;
          const sectionBottom = window.scrollY + bottom;
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            return index;
          }
        }
        return null;
      });

      const currentSectionIndex = sectionIndices.find(index => index !== null);
      if (currentSectionIndex !== null && currentSectionIndex !== activeIndex) {
        setActiveIndex(currentSectionIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, navItems]);
const handleToggle = ()=>{
  setToggle(true);
}
  return (
    <>
      <aside className={toggle ? "aside show-menu":"aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <MaterialUISwitch
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav__item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  <a href={item.href} className="nav__link">
                    <i className={item.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2025-2027.</span>
        </div>
      </aside>
      <div className={toggle ? "nav__toggle nav__toggle-open":"nav__toggle"}onClick={()=>showMenu(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
