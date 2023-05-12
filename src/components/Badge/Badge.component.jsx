import style from "./Badge.module.scss";

function Badge(props) {
  return (
    <button className={style.badge} onClick={props.onClick}>
      {/* TODO : Notification bubble. */}
      {props.icon && <props.icon />}
    </button>
  );
}

export default Badge;
