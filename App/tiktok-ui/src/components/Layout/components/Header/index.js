import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faSignIn } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss';
import images from '~/assets/images';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import Button from '~/components/Button';


const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 0)
    }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy interactive={true} visible={searchResult.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('search-result')} {...attrs}>
                            Kết quả
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search acccounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <i className="fa-solid fa-circle-xmark"></i>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Button outline className={cx('login')}>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
