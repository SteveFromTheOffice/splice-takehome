import {useState} from "react";
import ArrowIcon from "../../images/ArrowRight.svg";

import style from "./SidebarDropdown.module.scss";

function SidebarDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={style.dropdown}>
      <header onClick={handleOnClick}>
        <img
          src={ArrowIcon}
          alt="arrow pointing to the right"
          className={isOpen ? style.open : null}
        />
        <img src={props.icon} alt={props.alt} />
        <div>{props.text}</div>
      </header>
      {isOpen ? <content>{props.children}</content> : null}
    </section>
  );
}

export default SidebarDropdown;
