import style from "./Avatar.module.scss";

function Avatar() {
  return (
    <div className={style.avatar}>
      <main>
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
        <span>Title</span>
      </main>
      <aside>5m ago</aside>
    </div>
  );
}

export default Avatar;
