import classNames from "classnames/bind";
import styles from "./DefaultLayouts.module.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);
function DefaultLayouts({ children }) {
  return (
    <div>
      <div className={cx("wraper")}>
        <Header />
        <div className={cx("container")}>
          <Sidebar />
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayouts;