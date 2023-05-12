import {ReactComponent as StarIcon} from "../../images/Star.svg";

import style from "./Brand.module.scss";

function Brand() {
  return (
    <h1 className={style.brand}>
      <StarIcon alt="Logo" />
      <span>MS</span>
    </h1>
  );
}

export default Brand;
