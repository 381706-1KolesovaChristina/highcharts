import s from './button.module.css'

const Button = (props) => {
    return (
        <div className={s.button}>
            <a className={s.buttonText} >{props.text}</a>
        </div >
    );
}

export default Button;