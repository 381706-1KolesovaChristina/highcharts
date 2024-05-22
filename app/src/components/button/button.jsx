import s from './button.module.css'

const Button = () => {
    return (
        <div className={s.container}>
            <div className={s.buttonHome}>
                <a className={s.buttonText} href='#!'>
                    <img src='#!' alt=''></img>
                </a>
            </div>
            <div className={`${s.button} ${s.active}`}>
                <a className={s.buttonText} href='#'>Затраты на ГРР</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>CPP 2D</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>CPP 3D</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>ПРБ</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Скважины</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Приросты</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Добыча</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Запасы</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Показатели СЦП</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Удельные показатели</a>
            </div>
            <div className={s.button}>
                <a className={s.buttonText} href='#'>Карта</a>
            </div>
        </div>
    );
}

export default Button; 