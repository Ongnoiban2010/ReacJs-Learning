import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

import {Wrapper as PopperWrapper} from '~/components/Popper'
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({children, items = [], hideOnClick = false, onChange = defaultFn}) {

    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // convert ve boolean su dung !!
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children]);
                } else {
                    onChange(item)
                }
            }}/>
        })
    }

    return ( 
        <Tippy 
        offset={[12,8]}
        interactive={true} 
        placement='bottom-end'
        delay={[0, 700]}
        render={(attrs) => (
            <div className={cx('menu-list')} {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    {history.length > 1 && <Header title="Language" onBack={() => {
                        setHistory(prev => prev.slice(0, prev.length - 1))
                    }}/>}
                    <div className={cx('menu-body')}>{renderItems()}</div>
                </PopperWrapper>
            </div>
        )}
        onHide={() => setHistory(prev => prev.slice(0, 1))}
        hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
     );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;