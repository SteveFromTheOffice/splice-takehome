import {Outlet} from "react-router-dom";

import Brand from "../Brand/Brand.component";
import LayoutHeader from "../LayoutHeader/LayoutHeader.component";
import LayoutSidebar from "../LayoutSidebar/LayoutSidebar.component";

import SidebarContainer from "../SidebarContainer/SidebarContainer.component";
import SidebarItem from "../SidebarItem/SidebarItem.component";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown.component";
import Avatar from "../Avatar/Avatar.component";

import {ReactComponent as DotIcon} from "../../images/Dot.svg";
import {ReactComponent as PieIcon} from "../../images/PieChart.svg";
import {ReactComponent as ShoppingIcon} from "../../images/ShoppingBagOpen.svg";
import {ReactComponent as FolderIcon} from "../../images/FolderNotch.svg";
import {ReactComponent as BookIcon} from "../../images/BookOpen.svg";

import {ReactComponent as ProfileIcon} from "../../images/IdentificationBadge.svg";
import {ReactComponent as AccountIcon} from "../../images/IdentificationCard.svg";
import {ReactComponent as CorpIcon} from "../../images/UsersThree.svg";
import {ReactComponent as BlogIcon} from "../../images/Notebook.svg";
import {ReactComponent as SocialIcon} from "../../images/ChatsTeardrop.svg";
import {ReactComponent as WrenchIcon} from "../../images/Wrench.svg";

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
          <SidebarItem text="Overview" icon={DotIcon} url="/dashboard/default/overview" />
          <SidebarItem text="Projects" icon={DotIcon} url="/dashboard/projects/overview" />
        </SidebarContainer>

        <SidebarContainer text="Dashboards">
          <SidebarDropdown text="Default" icon={PieIcon}>
            <SidebarItem text="Overview" url="/dashboard/default/overview" />
          </SidebarDropdown>
          <SidebarDropdown text="eCommerce" icon={ShoppingIcon}>
            <SidebarItem text="Overview" url="/dashboard/ecommerce/overview" />
          </SidebarDropdown>
          <SidebarDropdown text="Projects" icon={FolderIcon}>
            <SidebarItem text="Overview" url="/dashboard/projects/overview" />
          </SidebarDropdown>
          <SidebarDropdown text="Online Courses" icon={BookIcon}>
            <SidebarItem text="Overview" url="/dashboard/courses/overview" />
          </SidebarDropdown>
        </SidebarContainer>

        <SidebarContainer text="Pages">
          <SidebarDropdown text="User Profile" icon={ProfileIcon}>
            <SidebarItem text="Overview" url="/pages/user/overview" />
            <SidebarItem text="Projects" url="/pages/user/projects" />
            <SidebarItem text="Campaigns" url="/pages/user/campaigns" />
            <SidebarItem text="Documents" url="/pages/user/documents" />
            <SidebarItem text="Followers" url="/pages/user/followers" />
          </SidebarDropdown>
          <SidebarDropdown text="Account" icon={AccountIcon}>
            <SidebarItem text="Something" url="/pages/account/something" />
          </SidebarDropdown>
          <SidebarDropdown text="Corporate" icon={CorpIcon}>
            <SidebarItem text="Something" url="/pages/corporate/something" />
          </SidebarDropdown>
          <SidebarDropdown text="Blog" icon={BlogIcon}>
            <SidebarItem text="Something" url="/pages/blog/something" />
          </SidebarDropdown>
          <SidebarDropdown text="Social" icon={SocialIcon}>
            <SidebarItem text="Something" url="/pages/social/something" />
          </SidebarDropdown>
          <SidebarDropdown text="Tools" icon={WrenchIcon}>
            <SidebarItem text="Calculator" url="/pages/tools/calculator" />
          </SidebarDropdown>
        </SidebarContainer>
      </LayoutSidebar>

      {/* Right Sidebar */}
      <LayoutSidebar
        isOpen={isRightFlyoutOpen}
        onMouseOut={() => dispatch(UiActions.toggleRightSidebar())}>
        {/* TODO : Pull this into a component and simulate API data */}
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
