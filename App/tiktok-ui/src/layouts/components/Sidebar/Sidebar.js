import config from "~/config";
import Menu, {MenuItem} from "./Menu";
import {HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon} from '~/components/Icon'
import styles from './Sidebar.module.scss';

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
    return ( 
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For your" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </div>
     );
}

export default Sidebar;