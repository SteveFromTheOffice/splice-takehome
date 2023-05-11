import ArrowIcon from "../../images/ArrowRight.svg";

import style from "./SidebarDropdown.module.scss";

function SidebarDropdown(props) {
  return (
    <section className={style.dropdown}>
      <header>
        <img
          src={ArrowIcon}
          alt="arrow pointing to the right"
        />
        <img src={props.icon} alt={props.alt} />
        <div>{props.text}</div>
      </header>
      <content>{props.children}</content>
    </section>
  );
}

export default SidebarDropdown;
