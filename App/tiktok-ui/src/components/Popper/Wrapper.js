import classNames from 'classnames/bind';
import styles from './Popper.module.scss'

const cx = classNames.bind(styles);
function Wrapper({Children}) {
    return (
        <div className={cx('wrapper')}>
            {Children}
        </div>
      );
}

export default Wrapper;