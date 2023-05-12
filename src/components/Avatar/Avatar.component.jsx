import style from "./Avatar.module.scss";

function Avatar(props) {
  return (
    <div className={style.avatar}>
      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
      <span title={props.text}>{props.text}</span>
    </div>
  );
}

export default Avatar;
