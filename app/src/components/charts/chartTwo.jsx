import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartTwo.module.css'

const options = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Затраты на ГРР по ЛУ на 2023 год',
        //margin: 13,
        style: {
            color: '#0079BE',
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N']
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

const ChartTwo = () => {
    return (
        <div className={s.chart}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ChartTwo;