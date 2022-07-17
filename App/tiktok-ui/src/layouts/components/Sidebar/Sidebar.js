import config from "~/config";
import Menu, {MenuItem} from "./Menu";
import {HomeIcon, LiveIcon, UserGroupIcon} from '~/components/Icon'
import styles from './Sidebar.module.scss';

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Sidebar() {
    return ( 
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For your" to={config.routes.home} icon={<HomeIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} />
                <MenuItem title="LIVE" to={config.routes.home} icon={<LiveIcon/>} />
            </Menu>
        </div>
     );
}

export default Sidebar;