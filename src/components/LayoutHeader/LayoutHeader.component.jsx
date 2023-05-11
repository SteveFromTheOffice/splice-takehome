import Breadcrumb from "../Breadcrumb/Breadcrumb.component";
import Button from "../Badge/Badge.component";

import SidebarIcon from "../../images/Sidebar.svg";
import StarIcon from "../../images/Star.svg";
import SunIcon from "../../images/Sun.svg";
import ClockIcon from "../../images/ClockCounterClockwise.svg";
import BellIcon from "../../images/Bell.svg";

import style from "./LayoutHeader.module.scss";
import Search from "../Search/Search.component";

function LayoutHeader() {
  return (
    <header className={style.header}>
      <Button icon={SidebarIcon} alt="" />
      <Button icon={StarIcon} alt="" />
      <Breadcrumb />
      <Search />
      <Button icon={SunIcon} alt="" />
      <Button icon={ClockIcon} alt="" />
      <Button icon={BellIcon} alt="" />
      <Button icon={SidebarIcon} alt="" />
    </header>
  );
}

export default LayoutHeader;
