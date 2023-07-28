import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import styles from './AccountsItem.module.scss'

const cx = classNames.bind(styles)

function AccountsItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://wallpapers.com/images/hd/cute-profile-picture-d29aik4tc8ckfm9i.jpg' alt='Trinh'/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>Đoàn Thị Trinh</span>
                <FontAwesomeIcon icon={faCheckCircle}/>
            </p>
            <p className={cx('user-name')}>@trinhbabee</p>
        </div>
    </div>
}

export default AccountsItem