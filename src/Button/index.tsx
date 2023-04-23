import React, { type FC ,ReactNode,useContext} from 'react';
import cs from 'classnames';
import './index.less'
import {ConfigContext} from '../ConfigProvider'
interface ButtonProps {
    type?:'highlight'|'default',
    disabled?:boolean,
    icon?:ReactNode,
    text?:string,
    children?:ReactNode,
    className?:string,
    style?:object,
    onClick?:React.MouseEventHandler<HTMLDivElement>

}



const Button: FC<ButtonProps> = (props) =>{
    const {type,disabled,icon,text,children,className,style,onClick} = props;
    

    const {prefix} = useContext(ConfigContext)
    // const prefix = 'vis-ui-lib'
    const btnPrefix = prefix + '-btn'
    const classes = cs(btnPrefix,{
        [`${btnPrefix}-highlight`]:type==='highlight',
        [`${btnPrefix}-disabled`]:disabled,
    },className)

    return (
        <div 
            className={classes}
            style={style}
            onClick={onClick}
            >
            {icon}
            {text}
            {children}
        </div>
    )
};

export default Button;
