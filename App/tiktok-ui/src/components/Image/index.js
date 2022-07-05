import { forwardRef, useState } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from './Image.module.scss';

function Image({src, alt, className, fallback: customFallback = images.noImage, ...props}, ref) {
    const [fallback, setFailBack] = useState('');
    const handleError = () => {
        setFailBack(customFallback);
    }

    return <img className={classNames(styles.wrapper, className)} {...props} ref={ref} alt={alt} src={fallback || src} onError={handleError}/>
}

export default forwardRef(Image);