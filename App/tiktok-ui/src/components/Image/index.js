import { forwardRef, useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import images from "~/assets/images";
import styles from './Image.module.scss';

const Image = forwardRef(({src, alt, className, fallback: customFallback = images.noImage, ...props}, ref) => {
    const [fallback, setFailBack] = useState('');
    const handleError = () => {
        setFailBack(customFallback);
    }

    return (
        <img className={classNames(styles.wrapper, className)} {...props} ref={ref} alt={alt} src={fallback || src} onError={handleError}/>
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;