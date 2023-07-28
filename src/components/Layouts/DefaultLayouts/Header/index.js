import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faRightToBracket,
  faSearch,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippys from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/";
import 'tippy.js/dist/tippy.css';

import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountsItem from "~/components/AccountsItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { MailBox, MessageIcon } from "~/components/Icons";
import Images from "~/components/Images";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Tiếng việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "en",
          title: "Tiếng Anh",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Phím tắt trên màn hình",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Hiển thị trang cá nhân",
    to: "/@trinhbabe",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Nhận xu",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Cài đặt",
    to: "/setting",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    title: "Đăng xuất",
    to: "/logout",
    separate: true
  },
]


function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const userCurrent = true;
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    },[]);
  });
  return (
    <header className={cx("wraper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="" />
        </div>
        <HeadlessTippys
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </HeadlessTippys>

        <div className={cx("action")}>
          {userCurrent ? (
            <>
            <Button outline text icon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>
            <Tippy
             content='Tin nhắn'
             placement="bottom"
            >
              <button className={cx('actions-btn')}>
                <MessageIcon className={cx('actions-btn-icon')}/>
              </button>     
            </Tippy>

            <Tippy
              content='Hộp thư'
              placement="bottom"
            >
               <button className={cx('actions-btn')}>
                <MailBox className={cx('actions-btn-icon')} />
                <sup className={cx('actions-mailbox_quanlity')}>5</sup>
               </button>
            </Tippy>
            </>
          ) : (
            <>
              <Button outline text icon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}

          <Menu items={userCurrent ? userMenu : MENU_ITEMS}>
            {userCurrent ? (
              <Images
               src="https://wallpapers.com/images/hd/cute-profile-picture-d29aik4tc8ckfm9i.jpg"
               className={cx("user-avatar")}
               alt="user" />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
