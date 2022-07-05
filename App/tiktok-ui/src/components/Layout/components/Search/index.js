import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss'
import { SearchIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inpurRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2,3]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inpurRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input placeholder="Search acccounts and videos" value={searchValue} ref={inpurRef} spellCheck={false} 
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
                />
                {!!searchValue &&  <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>}
                {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon/>
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search;