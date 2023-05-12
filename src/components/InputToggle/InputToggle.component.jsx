import {useState} from "react";

import LightIcon from "../../images/Light.svg";
import DarkIcon from "../../images/Dark.svg";

import style from "./InputToggle.module.scss";

const InputToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={style.inputToggle}>
      <img src={LightIcon}></img>
      <button className={isToggled ? style.right : style.left} onClick={handleToggle}></button>
      <img src={DarkIcon}></img>
    </div>
  );
};

export default InputToggle;
