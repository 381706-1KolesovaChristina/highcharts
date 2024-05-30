import Highcharts, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartTwo.module.css'

let data1 = [33210, 38567, 46300, 51453, 56145, 62986];
let data2 = [33210, 38567, 46300, 51453, 56145, 62986];

const options = {
    chart: {
        type: 'bar',
        height: 280,
        backgroundColor: null
    },
    title: {
        text: 'ПАО “Газпром”<br><br>ООО “ГП Недра”<br><br>ООО “ГП НИИГАЗ”<br><br>ООО “ГД Краснодар”<br><br>Компания N<br><br>Компания N',
        align: 'center',//*выравнивание по горизонтали 
        floating: true,//*плавающий заголовок - область графика не освобождает место под него 
        y: 5,
        verticalAlign: 'top',//'middle',//*выравнивание по вертикали
        style: {
            fontSize: '20px',
            color: '#0079BE',
            fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    xAxis: [{
        visible: false,//*отображение
        type: 'category',
        reversed: true,//*поворот оси наибольшим числом к нач.коорд.
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],
    },
    {
        visible: false,
        type: 'category',
        reversed: false,
        linkedTo: 0,
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],
    }
    ],
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                inside: true,//*вырпвнивание внутри столбца
                color: '#FFFFFF',
                style: {
                    textOutline: 0,
                    fontSize: '20px'
                }
            },
            pointWidth: 30,
        }
    },

    yAxis: [{
        visible: false, //скрыть ось
        title: {
            text: null
        },
        max: 180000
    }, {
        visible: false,
        title: {
            text: null
        },
        reversed: true,
        max: 180000
    },

    ],
    series: [
        {
            name: 'План',
            data: data1,
            color: '#BDBDBD',
            yAxis: 0,
            xAxis: 0,
            categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N']
        },
        {
            name: 'Факт',
            data: data2,
            color: '#13B5EA',
            yAxis: 1,
            xAxis: 1,
            categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],
            dataLabels: {
                //format: '{point.y} {data3.value}(%)'
                formatter: function () {
                    let series1 = this.series.chart.series[0].yData[this.point.index];
                    return `${this.y} (${((this.y / series1) * 100)}%)`;
                }
            },
        }
    ],

}



const ChartTwo = () => {
    return (
        <div>
            <div className={s.section2}>
                <div className={s.label}>Затраты на ГРР по ЛУ на 2023 год</div>
                <div className={s.sabLabel}>
                    <div>План</div>
                    <div>Факт</div>
                </div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
}

export default ChartTwo;