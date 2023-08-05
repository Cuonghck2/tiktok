import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import config from "~/config";
import Menu from "./Menu/Menu";
import { HomeIcon,HomeActiveIcon,FollowingIcon,FollowingActiveIcon,LIVEIcon,LIVEActiveIcon } from '~/components/Icons'
import { MenuItem } from "./Menu";

const cx = classNames.bind(styles)

function Sidebar() {
    return ( 
       <aside className={cx('wraper')}>
          <Menu>
            <MenuItem icon={<HomeIcon/>} activeIcon ={<HomeActiveIcon/>} title = "For Your" to={config.routes.home} />
            <MenuItem icon={<FollowingIcon/>} activeIcon = {<FollowingActiveIcon/>} title = "Following" to={config.routes.following} />
            <MenuItem icon={<LIVEIcon/>} activeIcon = {<LIVEActiveIcon/>} title = "LIVE" to={config.routes.live} />
          </Menu>
       </aside>
     );
}

export default Sidebar;