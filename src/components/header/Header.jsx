import React from "react";
import Style from "./header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <section id={Style.headerBlock}>
      <nav>
        <Logo />
        <Menu />
      </nav>
    </section>
  );
};

export default Header;
