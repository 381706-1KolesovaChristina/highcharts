import Highcharts, { color } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import s from './chartTwo.module.css'

const options = {
    chart: {
        type: 'bar',
        width: 1400,
        // maxHeight: 280,
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
    xAxis: [{
        //visible: false,
        type: 'category',
        reversed: true,
        opposite: true,//!
        // title: { //!
        //     text: null
        // },
        // // centerInCategory: true,//
        // // alignTicks: false,//
        lineColor: 'transparent',//скрыть саму ось
        tickLength: 0,//скрыть саму ось
        // maxHeight: 280, //!
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],
    },
    {
        //visible: false,
        type: 'category',
        reversed: false,
        //opposite: true,//!
        linkedTo: 0,
        // title: { //!
        //     text: null
        // },
        // // centerInCategory: true,//
        // // alignTicks: false,//
        // lineColor: 'transparent',//скрыть саму ось
        // tickLength: 0,//скрыть саму ось
        maxHeight: 280, //!
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],

    },
    {
        //visible: false,
        type: 'category',
        reversed: false,
        //opposite: true,//!
        linkedTo: 0,
        // title: { //!
        //     text: null
        // },
        // // centerInCategory: true,//
        // // alignTicks: false,//
        // lineColor: 'transparent',//скрыть саму ось
        // tickLength: 0,//скрыть саму ось
        maxHeight: 280, //!
        categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N'],

    }
    ],
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
        //min: 33000,
        width: 520
    }, {
        visible: false,
        title: {
            text: null
        },
        reversed: true,
        // min: 33000
        width: 520
    },

    ],
    series: [
        {
            name: 'План',
            data: [33210, 38567, 46300, 51453, 56145, 62986],
            color: '#BDBDBD',
            //centerInCategory: true,
            yAxis: 0,
            xAxis: 0,
            categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N']
        },
        {
            name: 'Факт',
            data: [33210, 38567, 46300, 51453, 56145, 62986],
            color: '#13B5EA',
            //centerInCategory: true,
            yAxis: 1,
            xAxis: 2,
            categories: ['ПАО “Газпром”', 'ООО “ГП Недра”', 'ООО “ГП НИИГАЗ”', 'ООО “ГД Краснодар”', 'Компания N', 'Компания N']
        }
    ],

}


const ChartTwo = () => {
    return (
        <div>
            {/* <div className={s.sabLabel}>
                <div>План</div>
            </div> */}
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default ChartTwo;