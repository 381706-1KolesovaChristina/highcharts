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
        //     align: 'false'
        //     text: 'Факт',
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
        reversed: false,
        labels: {
            step: 1
        },
        accessibility: {
            description: 'Age (male)'
        }
    },

    yAxis: [{
        visible: false,
        title: {
            text: null
        },
        reversed: true
    }, {
        title: {
            text: null
        },
        accessibility: {
            description: 'Percentage population',
            rangeDescription: 'Range: 0 to 5%'
        },
        offset: 0,
        left: '50%',
        width: '50%'
    }],
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
            name: 'Факт',
            data: [62986, 56145, 51453, 46300, 38567, 33210],
            color: '#13B5EA',
            centerInCategory: true
        }
    ],

}

const ChartThree = () => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ChartThree;