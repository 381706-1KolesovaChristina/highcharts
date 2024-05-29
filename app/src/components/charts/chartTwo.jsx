import Highcharts, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartTwo.module.css'

let data1 = [33210, 38567, 46300, 51453, 56145, 62986];
let data2 = [33210, 38567, 46300, 51453, 56145, 62986];
let data3 = [100 * data2[0] / data1[0], 100 * data2[1] / data1[1]];

const options = {
    chart: {
        type: 'bar',
        height: 280,
        backgroundColor: null
    },
    title: {
        text: 'ПАО “Газпром”<br><br>ООО “ГП Недра”<br><br>ООО “ГП НИИГАЗ”<br><br>ООО “ГД Краснодар”<br><br>Компания N<br><br>Компания N',
        align: 'center',//*выравнивание по горизонтали 
        floating: true,
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
        visible: false,
        type: 'category',
        reversed: true,
        opposite: true,//!
        // centerInCategory: true,//
        // alignTicks: false,//
        lineColor: 'transparent',//скрыть саму ось
        tickLength: 0,//скрыть саму ось
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],
    },
    {
        visible: false,
        type: 'category',
        reversed: false,
        //opposite: true,//!
        linkedTo: 0,
        // centerInCategory: true,//
        // alignTicks: false,//
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],

    },
    {
        visible: false,
        type: 'category',
        reversed: false,
        //opposite: true,//!
        linkedTo: 0,
        // centerInCategory: true,//
        // alignTicks: false,//
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],

    }
    ],
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                inside: true,
                color: '#FFFFFF',
                style: {
                    textOutline: 0,
                    fontSize: '20px'
                }
            },
            pointWidth: 30,
            pointPadding: 0,//!
            connectorAllowed: true
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
            xAxis: 2,
            categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],
            dataLabels: {
                format: '{point.y} (%)'
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