import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


import styles from './AccountsItem.module.scss'

const cx = classNames.bind(styles)

function AccountsItem({data}) {
    return <Link  to = {`/@${data.nickname}`} className={cx('wrapper')}>
        <img className={cx('avatar')} src= {data.avatar} alt={data.avatar}/>
        <div className={cx('info')}>
            <p className={cx('name')}>
                <span>{`${data.first_name} ${data.last_name}`}</span>
                {data.tick && <FontAwesomeIcon icon={faCheckCircle}/>}
            </p>
            <p className={cx('user-name')}>{data.nickname}</p>
        </div>
    </Link>
}

AccountsItem.propTypes= {
    data: PropTypes.object.isRequired
}
export default AccountsItem