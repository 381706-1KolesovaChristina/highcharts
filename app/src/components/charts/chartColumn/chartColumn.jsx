import Highcharts from 'highcharts' //, { chart, color }
import HighchartsReact from 'highcharts-react-official'
import s from './chartColumn.module.css'

const ChartColumn = (props) => {
    const options = {
        chart: {
            type: 'column',
            //width: 1400,
            // 
            // height: 400
        },
        credits: {
            enabled: false,
        },
        title: {
            text: undefined//'Затраты на ГРР всего 2018-2026гг., млн руб. (с НДС)',
        },
        xAxis: {
            lineColor: 'rgba(0, 121, 190, 1)',
            categories: props.data.categories,//['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
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
                name: props.data.name[0],//'План',
                data: props.data.data[0],//[78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100, 78100],
                color: props.data.color[0],//'#BDBDBD',
                centerInCategory: true, //*центрирование по категориям игнорируя пустые точки. false- резерв места для пустых точек
                dataLabels: {
                    style: {
                        color: props.data.color[0],//'#BDBDBD',
                    },
                },
            },
            {
                name: props.data.name[1],//'Факт',
                data: props.data.data[1],//[76900, 78100, 76900, 76900, 76900, 76900],
                color: props.data.color[1],//'#13B5EA',
                centerInCategory: true,
                dataLabels: {
                    style: {
                        color: props.data.color[1],//'#13B5EA',
                    },
                },
            }
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

export default ChartColumn;