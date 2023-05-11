import style from "./SidebarItem.module.scss";

function SidebarItem(props) {
  return (
    <div className={style.item}>
      {props.icon ? <img src={props.icon} alt={props.alt} /> : <span></span>}
      <p>{props.text}</p>
    </div>
  );
}

export default SidebarItem;
