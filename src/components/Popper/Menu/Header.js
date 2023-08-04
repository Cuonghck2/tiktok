import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Header({title, onBack}) {
  
    return ( 
       <header className={cx('header')} onClick={onBack}>
        <button className={cx('back-btn')}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <h4 className={cx('title-header')}>{title}</h4>
       </header>
     )
}

Header.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
}
export default Header;