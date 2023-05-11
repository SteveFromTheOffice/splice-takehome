import style from "./Badge.module.scss";

function Badge(props) {
  return (
    <button className={style.badge}>
      {/* TODO : Notification bubble. */}
      {props.icon && <img src={props.icon} alt={props.alt} />}
    </button>
  );
}

export default Badge;
