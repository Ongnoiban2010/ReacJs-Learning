import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

const cx = classNames.bind(styles);

function Button({ to, href, leftIcon, rightIcon, onClick, className, children, rounded = false, disabled = false, text = false, large=false, small=false, primary=false, outline=false, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        // delete props.onClick;
        // remove event listener when button disabled
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'functions') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
