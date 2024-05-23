import Button from './button/button';
import s from './buttons.module.css'
import btn from '../../Vector.svg'


const Buttons = () => {
    return (
        <div className={s.container}>

            <div className={s.buttonHome}>
                <div className={s.img} href='#!'>
                    <img src={btn} alt='btn'></img>
                </div>
            </div>

            <div className={s.button}>
                <a className={`${s.buttonText} ${s.active}`} href='#'>Затраты на ГРР</a>
            </div>

            <Button text='CPP 2D' />
            <Button text='CPP 3D' />
            <Button text='ПРБ' />
            <Button text='Скважины' />
            <Button text='Приросты' />
            <Button text='Добыча' />
            <Button text='Запасы' />
            <Button text='Показатели СЦП' />
            <Button text='Удельные показатели' />
            <Button text='Карта' />

        </div>
    );
}

export default Buttons; 