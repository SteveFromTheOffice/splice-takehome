import {Outlet} from "react-router-dom";

import Brand from "../Brand/Brand.component";
import LayoutHeader from "../LayoutHeader/LayoutHeader.component";
import LayoutSidebar from "../LayoutSidebar/LayoutSidebar.component";

import style from "./Layout.module.scss";
import SidebarContainer from "../SidebarContainer/SidebarContainer.component";
import SidebarItem from "../SidebarItem/SidebarItem.component";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown.component";

import DotIcon from "../../images/Dot.svg";

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
          <SidebarDropdown text="Default">
            <SidebarItem text="Something" />
          </SidebarDropdown>
        </SidebarContainer>

        <SidebarContainer text="Pages">
          <SidebarDropdown text="Tools">
            <SidebarItem text="Calculator" />
          </SidebarDropdown>
        </SidebarContainer>
      </LayoutSidebar>

      {/* Right Sidebar */}
      <LayoutSidebar>
        <div>Notifications</div>
      </LayoutSidebar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
