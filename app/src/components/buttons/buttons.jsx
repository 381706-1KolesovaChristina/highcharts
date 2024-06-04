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

            {/* <div className={s.button}>
                <a className={`${s.buttonText} ${s.active}`} href='#'>Затраты на ГРР</a>
            </div> */}
            <Button text='Затраты на ГРР' link='/chart1' />
            <Button text='CPP 2D' link='/chart2' />
            <Button text='CPP 3D' link='/chart3' />
            <Button text='ПРБ' link='/chart4' />
            <Button text='Скважины' link='/chart5' />
            <Button text='Приросты' link='/chart6' />
            <Button text='Добыча' link='/chart7' />
            <Button text='Запасы' link='/chart8' />
            <Button text='Показатели СЦП' link='/chart9' />
            <Button text='Удельные показатели' link='/chart10' />
            <Button text='Карта' link='/chart11' />

        </div>
    );
}

export default Buttons; 