import Highcharts from 'highcharts' //, { chart, color }
import HighchartsReact from 'highcharts-react-official'
import s from './chartPie.module.css'

const ChartPie = (props) => {
    debugger;
    const options = {
        chart: {
            type: 'pie',
            //width: 1400,
            // 
            // height: 400
        },
        credits: {
            enabled: false,
        },
        title: {
            text: undefined,
        },
        // xAxis: {
        //     lineColor: 'rgba(0, 121, 190, 1)',
        //     categories: props.data.categories,//['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        //     labels: {
        //         style: {
        //             color: 'rgba(0, 121, 190, 1)',
        //             fontSize: '16px',
        //             fontWeight: 'bold'
        //         }
        //     }
        // },
        // yAxis: {
        //     visible: false //скрыть ось
        // },
        plotOptions: {
            series: {
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                borderRadius: 5,
                borderWidth: 0,
                // colorByPoint: true,
                dataLabels: {
                    enabled: true,
                    inside: false,
                    distance: '-10%',
                    style: {
                        fontSize: '16px',
                        textOutline: "0px"//белая обводка лейблов
                    },
                    connectorWidth: 0
                },
                // groupPadding: 0.1, //*расстояние между категориями столбцов 
                // pointPadding: 0.05 //*расстояние между столбцами внутри категории
            }
        },
        series: [
            {

                name: props.data.name,//'План',
                data: props.data.data,//[78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100],
                colors: props.data.color,//'#BDBDBD',
                // centerInCategory: true, //*центрирование по категориям игнорируя пустые точки. false- резерв места для пустых точек
                // dataLabels: {
                //     style: {
                //         color: props.data.color[0],//'#BDBDBD',
                //     },
                // },
            },
            // {
            //     name: props.data.name[1],//'Факт',
            //     data: props.data.data[1],//[76900, 78100, 76900, 76900, 76900, 76900],
            //     color: props.data.color[1],//'#13B5EA',
            //     centerInCategory: true,
            //     dataLabels: {
            //         style: {
            //             color: props.data.color[1],//'#13B5EA',
            //         },
            //     },
            // }
        ],

    };

    return (
        <div className={s.section1}>
            <div className={s.label}>{props.data.label}</div>
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

export default ChartPie;