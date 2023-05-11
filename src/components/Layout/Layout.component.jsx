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

function Layout() {
  return (
    <div className={style.layout}>
      <LayoutHeader />

      {/* Left Sidebar */}
      <LayoutSidebar>
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
            <SidebarItem text="Calculator" />
          </SidebarDropdown>
          <SidebarDropdown text="Tools" icon={WrenchIcon}>
            <SidebarItem text="Calculator" />
          </SidebarDropdown>
        </SidebarContainer>
      </LayoutSidebar>

      {/* Right Sidebar */}
      <LayoutSidebar>
        <SidebarContainer text="Notifications">
          <Avatar />
        </SidebarContainer>
        <SidebarContainer text="Activities"></SidebarContainer>
        <SidebarContainer text="Contacts"></SidebarContainer>
      </LayoutSidebar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
