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
        </SidebarContainer>

        <SidebarContainer text="Pages">
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
