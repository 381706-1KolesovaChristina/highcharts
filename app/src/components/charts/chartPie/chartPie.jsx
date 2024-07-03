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
        plotOptions: {
            series: {
                minPointSize: 10,
                innerSize: '50%',
                zMin: 0,
                // borderRadius: 5, //* радиус углов секторов
                borderWidth: 0, //* толщина обводки секторов
                //borderColor: '#000000' //* цвет обвоки секторов
                // colorByPoint: true,

                dataLabels: [{
                    // inside: false,

                    distance: '-30%',
                    style: {
                        fontSize: '16px',
                        textOutline: "0px"//белая обводка лейблов
                    },
                    connectorWidth: 0
                }, {
                    format: '{point.name}',
                }]
                // groupPadding: 0.1, //*расстояние между категориями столбцов 
                // pointPadding: 0.05 //*расстояние между столбцами внутри категории
            }
        },
        series: [
            {

                name: props.data.name,//'План',
                data: props.data.data,//[78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100],
                colors: props.data.color,//'#BDBDBD',

                dataLabels: {
                    // enabled: false,
                    format: '{point.y:.1f}%',
                    // style: {
                    //     fontSize: '0.9em',
                    //     textOutline: 'none'
                    // }
                }
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
        <div className={s.section1} >
            <div className={s.label}>{props.data.label}</div>
            <div className={s.chart}>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'chart'}
                    options={options}
                />
            </div>
        </div >
    );
}

export default ChartPie;