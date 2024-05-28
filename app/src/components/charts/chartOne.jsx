import Highcharts, { chart, color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartOne.module.css'

const options = {
    chart: {
        type: 'column',
        //width: 1400,
        height: 400
    },
    title: {
        text: undefined//'Затраты на ГРР всего 2018-2026гг., млн руб. (с НДС)',
    },
    xAxis: {
        lineColor: 'rgba(0, 121, 190, 1)',
        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        labels: {
            style: {
                color: 'rgba(0, 121, 190, 1)',
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        visible: false //скрыть ось
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                inside: false,
                style: {
                    // color: '#BDBDBD',
                    textOutline: "0px"//белая обводка лейблов
                }
            }
            // maxPointWidth: 55
        }//, {
        //     dataLabels: {
        //         enabled: true,
        //         // color: '#BDBDBD',
        //         style: {
        //             textOutline: "0px"//белая обводка лейблов
        //         }
        //     },
        //     // maxPointWidth: 55
        // },]
    },
    series: [
        {
            name: 'План',
            data: [78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100],
            color: '#BDBDBD',
            centerInCategory: true,
            // dataLabels: {
            //     style: {
            //         enabled: true,
            //         color: '#BDBDBD',

            //         textOutline: "0px"//белая обводка лейблов
            //     }
            // },
        },
        {
            name: 'Факт',
            data: [76900, 78100, 76900, 76900, 76900, 76900],
            color: '#13B5EA',
            centerInCategory: true,
            // dataLabels: {
            //     enabled: true,
            //     color: '#13B5EA',
            //     style: {
            //         textOutline: "0px"//белая обводка лейблов
            //     }
            // },
        }
    ],

}

const ChartOne = () => {
    return (
        <div className={s.section1}>
            <div className={s.label}>Затраты на ГРР всего 2018-2026гг., млн руб. (с НДС)</div>
            <div className={s.chart}>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'chart'}
                    options={options}
                />
            </div>
        </div>
    );
}

export default ChartOne;