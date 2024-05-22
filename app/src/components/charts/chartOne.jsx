import Highcharts, { chart, color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartOne.module.css'

const options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Затраты на ГРР всего 2018-2026гг., млн руб. (с НДС)',
        margin: 13,
        style: {
            color: '#0079BE',
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026']
    },
    yAxis: {
        visible: false //скрыть ось
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true
            },
            maxPointWidth: 55
        },
    },
    series: [
        {
            name: 'План',
            data: [78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100],
            color: '#BDBDBD',
            centerInCategory: true
        },
        {
            name: 'Факт',
            data: [76900, 78100, 76900, 76900, 76900, 76900],
            color: '#13B5EA',
            centerInCategory: true
        }
    ],

}

const ChartOne = () => {
    return (
        <div className={s.chart}>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
            />
        </div>
    );
}

export default ChartOne;