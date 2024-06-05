import Highcharts, { chart, color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartColumn.module.css'

const options = {
    chart: {
        type: 'column',
        //width: 1400,
        height: 400
    },
    credits: {
        enabled: false,
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
                fontSize: '16px',
                fontWeight: 'bold'
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
                    fontSize: '16px',
                    textOutline: "0px"//белая обводка лейблов
                }
            },
            groupPadding: 0.1, //*расстояние между категориями столбцов 
            pointPadding: 0.05 //*расстояние между столбцами внутри категории
        }
    },
    series: [
        {
            name: 'План',
            data: [78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100],
            color: '#BDBDBD',
            centerInCategory: true, //*центрирование по категориям игнорируя пустые точки. false- резерв места для пустых точек
            dataLabels: {
                style: {
                    color: '#BDBDBD',
                },
            },
        },
        {
            name: 'Факт',
            data: [76900, 78100, 76900, 76900, 76900, 76900],
            color: '#13B5EA',
            centerInCategory: true,
            dataLabels: {
                style: {
                    color: '#13B5EA',
                },
            },
        }
    ],

}

const ChartColumn = (props) => {
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

export default ChartColumn;