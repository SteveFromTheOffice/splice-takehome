import style from "./SidebarDropdown.module.scss";

function SidebarDropdown(props) {
  return (
    <div className={style.dropdown}>
      <h4>
        <img src="#" alt={props.alt} />
        <img src="#" alt={props.alt} />
        <div>{props.text}</div>
      </h4>
      <content>{props.children}</content>
    </div>
  );
}

export default SidebarDropdown;
