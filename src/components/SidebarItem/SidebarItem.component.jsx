import {Link} from "react-router-dom";
import style from "./SidebarItem.module.scss";

function SidebarItem(props) {
  return (
    <section className={style.item}>
      {props.icon ? <props.icon alt={props.alt} /> : <span></span>}
      <Link to={props.url}>{props.text}</Link>
    </section>
  );
}

export default SidebarItem;
