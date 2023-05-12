import Breadcrumb from "../Breadcrumb/Breadcrumb.component";
import Button from "../Badge/Badge.component";
import Search from "../Search/Search.component";
import {useDispatch} from "react-redux";
import {ThemeActions} from "../../stores/themeSlice";
import {UiActions} from "../../stores/uiSlice";

import {ReactComponent as SidebarIcon} from "../../images/Sidebar.svg";
import {ReactComponent as StarIcon} from "../../images/Star.svg";
import {ReactComponent as SunIcon} from "../../images/Sun.svg";
import {ReactComponent as ClockIcon} from "../../images/ClockCounterClockwise.svg";
import {ReactComponent as BellIcon} from "../../images/Bell.svg";

import style from "./LayoutHeader.module.scss";

function LayoutHeader() {
  const dispatch = useDispatch();

  return (
    <header className={style.header}>
      <Button icon={SidebarIcon} alt="" onClick={() => dispatch(UiActions.toggleLeftSidebar())} />
      <Button icon={StarIcon} alt="" />
      <Breadcrumb />
      <Search />
      <Button icon={SunIcon} alt="a sun" onClick={() => dispatch(ThemeActions.toggleMode())} />
      <Button icon={ClockIcon} alt="" />
      <Button icon={BellIcon} alt="" />
      <Button icon={SidebarIcon} alt="" onClick={() => dispatch(UiActions.toggleRightSidebar())} />
    </header>
  );
}

export default LayoutHeader;
