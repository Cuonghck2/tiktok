import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "~/components/Popper/";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.children];
              });
            }
          }}
          
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12,8]}
      placement="bottom-end"
      hideOnClick = "false"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Ngôn ngữ"
                onBack={() => {
                  if (history.length > 1) {
                    setHistory((prev) => {
                      return prev.slice(0, prev.length - 1);
                    });
                  }
                }}
              />
            )}
            <div className={cx('menu-body')}>
            {renderItem()}
            </div>
          </PopperWrapper>
        </div>
      )}
      onHide={()=>{setHistory((prev)=>{return prev.slice(0,1)})}}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
   items: PropTypes.array,
   children: PropTypes.node.isRequired
}
export default Menu;
