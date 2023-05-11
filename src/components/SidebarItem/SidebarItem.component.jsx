import style from "./SidebarItem.module.scss";

function SidebarItem(props) {
  return (
    <section className={style.item}>
      {props.icon ? <img src={props.icon} alt={props.alt} /> : <span></span>}
      <main>{props.text}</main>
    </section>
  );
}

export default SidebarItem;
