import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartTwo.module.css'

const options = {
    chart: {
        type: 'bar',
        width: 520,
        height: 280,
        backgroundColor: null
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
        title: {
            text: null
        }
    },
    // offset: 0,
    // left: '50%',
    // width: '50%'

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
            pointWidth: 30
        }
    },

    yAxis: {
        visible: false, //скрыть ось
        title: {
            text: null
        },
        title: {
            text: null
        },
        // plotOptions: {
        //     series: {
        //         dataLabels: {
        //             enabled: true,
        //             color: '#FFFFFF',
        //             style: {
        //                 textOutline: "0px"//белая обводка лейблов
        //             }
        //         },
        //         pointWidth: 30
        //     },
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
            <div className={s.sabLabel}>
                <div>План</div>
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ChartTwo;