import {Outlet} from "react-router-dom";

import Brand from "../Brand/Brand.component";
import LayoutHeader from "../LayoutHeader/LayoutHeader.component";
import LayoutSidebar from "../LayoutSidebar/LayoutSidebar.component";

import SidebarContainer from "../SidebarContainer/SidebarContainer.component";
import SidebarItem from "../SidebarItem/SidebarItem.component";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown.component";
import Avatar from "../Avatar/Avatar.component";

import DotIcon from "../../images/Dot.svg";
import PieIcon from "../../images/PieChart.svg";
import ShoppingIcon from "../../images/ShoppingBagOpen.svg";
import FolderIcon from "../../images/FolderNotch.svg";
import BookIcon from "../../images/BookOpen.svg";

import ProfileIcon from "../../images/IdentificationBadge.svg";
import AccountIcon from "../../images/IdentificationCard.svg";
import CorpIcon from "../../images/UsersThree.svg";
import BlogIcon from "../../images/Notebook.svg";
import SocialIcon from "../../images/ChatsTeardrop.svg";
import WrenchIcon from "../../images/Wrench.svg";

import style from "./Layout.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {UiActions} from "../../stores/uiSlice";
import Notification from "../Notification/Notification.component";

function Layout() {
  const dispatch = useDispatch();
  const isLeftFlyoutOpen = useSelector((state) => state.ui.isLeftFlyoutOpen);
  const isRightFlyoutOpen = useSelector((state) => state.ui.isRightFlyoutOpen);

  return (
    <div className={style.layout}>
      <LayoutHeader />

      {/* Left Sidebar */}
      <LayoutSidebar
        isOpen={isLeftFlyoutOpen}
        onMouseOut={() => dispatch(UiActions.toggleLeftSidebar())}>
        <Brand />
        <SidebarContainer text="Favorites">
          <SidebarItem text="Overview" icon={DotIcon} />
          <SidebarItem text="Projects" icon={DotIcon} />
        </SidebarContainer>

        <SidebarContainer text="Dashboards">
          <SidebarDropdown text="Default" icon={PieIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="eCommerce" icon={ShoppingIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="Projects" icon={FolderIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="Online Courses" icon={BookIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
        </SidebarContainer>

        <SidebarContainer text="Pages">
          <SidebarDropdown text="User Profile" icon={ProfileIcon}>
            <SidebarItem text="Overview" />
            <SidebarItem text="Projects" />
            <SidebarItem text="Campaigns" />
            <SidebarItem text="Documents" />
            <SidebarItem text="Followers" />
          </SidebarDropdown>
          <SidebarDropdown text="Account" icon={AccountIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="Corporate" icon={CorpIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="Blog" icon={BlogIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="Social" icon={SocialIcon}>
            <SidebarItem text="Something" />
          </SidebarDropdown>
          <SidebarDropdown text="Tools" icon={WrenchIcon}>
            <SidebarItem text="Calculator" />
          </SidebarDropdown>
        </SidebarContainer>
      </LayoutSidebar>

      {/* Right Sidebar */}
      <LayoutSidebar
        isOpen={isRightFlyoutOpen}
        onMouseOut={() => dispatch(UiActions.toggleRightSidebar())}>
        <SidebarContainer text="Notifications">
          <Notification text="You have a bug that needs to be fixed." subtext="5m ago" />
          <Notification text="New user registered" subtext="1:23 AM" />
          <Notification text="You have a bug that needs to be fixed." subtext="0:32 AM" />
          <Notification text="Andi Lane subscribed to you" subtext="Yesderday 12:39 AM" />
        </SidebarContainer>
        <SidebarContainer text="Activities">
          <Notification text="Edited the details of Project X" subtext="5m ago" />
          <Notification text="ByeWind" subtext="1:32 AM" />
          <Notification text="Submitted a bug" subtext="Yesterday 12:39 AM" />
          <Notification text="Modified A data in Page X" subtext="Last Thursday 3:34 AM" />
          <Notification text="Deleted a page in Project X" subtext="Aug 11" />
        </SidebarContainer>
        <SidebarContainer text="Contacts">
          <Avatar text="Natali Craig" subtext="" />
          <Avatar text="Drew Cano" subtext="" />
          <Avatar text="Orlando Diggs" subtext="" />
          <Avatar text="Andi Lane" subtext="" />
          <Avatar text="Kate Morrison" subtext="" />
          <Avatar text="Koray Okumus" subtext="" />
        </SidebarContainer>
      </LayoutSidebar>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
