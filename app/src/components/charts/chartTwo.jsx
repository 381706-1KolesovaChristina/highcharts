import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//import s from './chartTwo.module.css'

const options = {
    chart: {
        type: 'bar',
        width: 520,
        height: 280
    },
    title: {
        text: undefined
        //     align: 'left',
        //     text: 'План',
        //     margin: 21,
        //     style: {
        //         color: '#0079BE',
        //         fontWeight: 'bold'
        //     }
    },
    legend: {
        enabled: false
    },
    xAxis: {
        visible: false,
        reversed: true,

        accessibility: {
            description: 'Age (male)'
        },
        title: {
            text: null
        },
    },
    yAxis: {
        visible: false, //скрыть ось
        title: {
            text: null
        },
        title: {
            text: null
        },
        labels: {
            format: '{value}%'
        },
        accessibility: {
            description: 'Percentage population',
            rangeDescription: 'Range: 0 to 5%'
        }
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
            data: [33210, 38567, 46300, 51453, 56145, 62986],
            color: '#BDBDBD',
            centerInCategory: true
        }
    ],

}

const ChartTwo = () => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ChartTwo;