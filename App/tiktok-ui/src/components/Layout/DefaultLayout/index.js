import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <AccountItem/>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;