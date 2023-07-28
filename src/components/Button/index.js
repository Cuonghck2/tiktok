import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button(
    {to,
     href,
     children,
     primary = false,
     outline = false,
     text = false,
     icon,
     rounded = false,
     disable = false,
     small = false,
     large = false ,
     className,
     onClick,
     ...passProps}
     ) {

    let CompBtn = 'button'
    let classes = cx('wrapper',{
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large
    })

    let props = {
        icon,
        onClick,
        ...passProps
    }

    if(disable){
        Object.keys(props).forEach((key)=>{
           if(key.startsWith('on') && typeof props[key] === 'function'){
              delete props[key]
           }
        })
     }

    if(to){
        props.to = to
        CompBtn = Link

    }else if(href){
        props.href = href
        CompBtn = 'a'
    }

    return (
       <CompBtn className={classes} {...props}>
          {icon && <span className={cx('icon')}>{icon}</span>}
          <span>{children}</span>
       </CompBtn> 
    ) ;
}

export default Button;