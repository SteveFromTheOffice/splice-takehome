import style from "./Avatar.module.scss";

function Avatar(props) {
  return (
    <div className={style.avatar}>
      <main>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
        <span title={props.text}>{props.text}</span>
      </main>
      <aside>{props.subtext}</aside>
    </div>
  );
}

export default Avatar;
