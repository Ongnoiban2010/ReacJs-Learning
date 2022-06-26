import clsx from 'clsx'

import styles from './Button.module.css'

function Button({primary}) {
    return (
        <>
            <button className={clsx(styles.btn, {
                [styles.primary]: primary
            })}>Click me</button>
            {/* <button className={`${styles.btn} ${styles.active}`}>Click me!</button>
            <button className={clsx(styles.btn, {
                [styles.active]: false
            })}>Click me!</button> */}
        </>
    )
}

export default Button