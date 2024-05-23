import s from './parametrs.module.css'

const Parametr = () => {
    return (
        <div className={s.container}>
            <div className={s.forText}>
                <span className={s.text}>Параметры</span>
            </div>
            <div className={s.group}>
                <label className={s.year}>
                    <div className={s.year_text}><span>Год</span></div>
                    <select className={s.select}>
                        <option selected>По году</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                    </select>
                </label>
                <div className={s.btn}>
                    <button className={s.button}>Сбросить фильтры</button>
                </div>
            </div>
        </div>
    );
}

export default Parametr; 