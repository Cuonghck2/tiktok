import PropTypes from 'prop-types';
import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Images.module.scss";

function Images({ src, alt, className, ...props }, ref) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

Images.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.string,
  fallback: PropTypes.string,
}
export default forwardRef(Images);
