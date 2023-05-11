import style from "./SidebarContainer.module.scss";

function SidebarContainer(props) {
  return (
    <section className={style.container}>
      <h3>{props.text}</h3>
      <main>{props.children}</main>
    </section>
  );
}

export default SidebarContainer;
