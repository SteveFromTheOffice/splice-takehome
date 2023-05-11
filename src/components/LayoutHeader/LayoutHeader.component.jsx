import Breadcrumb from "../Breadcrumb/Breadcrumb.component";
import Button from "../Badge/Badge.component";
import Search from "../Search/Search.component";
import {useDispatch} from "react-redux";
import {UiActions} from "../../stores/uiSlice";

import SidebarIcon from "../../images/Sidebar.svg";
import StarIcon from "../../images/Star.svg";
import SunIcon from "../../images/Sun.svg";
import ClockIcon from "../../images/ClockCounterClockwise.svg";
import BellIcon from "../../images/Bell.svg";

import style from "./LayoutHeader.module.scss";

function LayoutHeader() {
  const dispatch = useDispatch();

  return (
    <header className={style.header}>
      <Button icon={SidebarIcon} alt="" onClick={() => dispatch(UiActions.toggleLeftSidebar())} />
      <Button icon={StarIcon} alt="" />
      <Breadcrumb />
      <Search />
      <Button icon={SunIcon} alt="" />
      <Button icon={ClockIcon} alt="" />
      <Button icon={BellIcon} alt="" />
      <Button icon={SidebarIcon} alt="" onClick={() => dispatch(UiActions.toggleRightSidebar())} />
    </header>
  );
}

export default LayoutHeader;
