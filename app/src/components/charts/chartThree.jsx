import Highcharts, { format } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartTree.module.css'

const options = {
    chart: {
        type: 'bar',
        width: 520,
        height: 280,
        backgroundColor: null
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
        title: {
            text: null
        }
    },

    yAxis: [{
        visible: false,
        title: {
            text: null
        },
        reversed: true
    }
        // offset: 0,
        // left: '50%',
        // width: '50%'
    ],
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                style: {
                    textOutline: "0px",//белая обводка лейблов
                    fontSize: '20px'
                },
                inside: true,
                format: '{y} <p>(61%)</p>'
            },
            pointWidth: 30
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
            <div className={s.sabLabel}>
                <div>Факт</div>
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ChartThree;