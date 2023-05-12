import {useState} from "react";
import {ReactComponent as ArrowIcon} from "../../images/ArrowRight.svg";

import style from "./SidebarDropdown.module.scss";

function SidebarDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={style.dropdown}>
      <header onClick={handleOnClick}>
        <ArrowIcon />
        <props.icon />
        <div>{props.text}</div>
      </header>
      {isOpen ? <main>{props.children}</main> : null}
    </section>
  );
}

export default SidebarDropdown;
