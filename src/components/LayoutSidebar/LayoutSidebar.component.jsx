import style from "./LayoutSidebar.module.scss";

function LayoutSidebar(props) {
  const handleOnMouseOut = (e) => {
    // If event is fired from a child element, ignore it.
    if (e.currentTarget.contains(e.relatedTarget)) return;

    // Pass it up.
    props.onMouseOut(e);
  };

  return (
    <aside
      className={`${style.sidebar} ${props.isOpen ? style.open : null}`}
      onMouseOut={handleOnMouseOut}>
      {props.children}
    </aside>
  );
}

export default LayoutSidebar;
