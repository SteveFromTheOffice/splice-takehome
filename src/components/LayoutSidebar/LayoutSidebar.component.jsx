import style from "./LayoutSidebar.module.scss";

function LayoutSidebar(props) {
  return <aside className={style.sidebar}>{props.children}</aside>;
}

export default LayoutSidebar;
