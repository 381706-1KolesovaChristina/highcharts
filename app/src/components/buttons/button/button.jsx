import { NavLink } from 'react-router-dom';
import s from './button.module.css'

const Button = (props) => {
    return (
        <div /*className={s.buttonText}*/>
            <NavLink
                // className={s.buttonText}
                to={props.link}
                className={({ isActive }) =>
                    // isPending ? s.buttonText : isActive ? s.active : ""
                    isActive ? s.active : s.buttonText
                }
            >{props.text}</NavLink>
        </div >
    );
}

export default Button;