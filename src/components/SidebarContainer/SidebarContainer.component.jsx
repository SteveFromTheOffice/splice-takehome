import style from "./SidebarContainer.module.scss";

function SidebarContainer(props) {
  return (
    <section className={style.container}>
      <h3>{props.text}</h3>
      <content>{props.children}</content>
    </section>
  );
}

export default SidebarContainer;
