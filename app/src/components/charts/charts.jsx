import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import ChartTwo from './chartTwo';
import ChartThree from './chartThree';
import s from './charts.module.css'


const Charts = () => {
    //лейблы к графикам
    return (
        <div className={s.section2}>
            <div className={s.label}>Затраты на ГРР по ЛУ на 2023 год</div>
            <div className={s.sabLabel}>
                <div>План</div>
                <div>Факт</div>
            </div>
            <div div className={s.charts} >
                <div className={s.chart1}>
                    <ChartTwo />
                </div>
                <div className="lable">
                    <ul>
                        <li>ПАО “Газпром”</li>
                        <li>ООО “ГП Недра”</li>
                        <li>ООО “ГП НИИГАЗ”</li>
                        <li>ООО “ГД Краснодар”</li>
                        <li>Компания N</li>
                        <li>Компания N</li>
                    </ul>
                </div>
                <div className={s.chart2}>
                    <ChartThree />
                </div>
            </div >
        </div>
    );
}

export default Charts;