import Highcharts from 'highcharts' //, { color }
import HighchartsReact from 'highcharts-react-official'
import s from './chartBar.module.css'


const ChartBar = (props) => {
    const options = {
        chart: {
            type: 'bar',
            height: 280,
            backgroundColor: null
        },
        credits: {
            enabled: false,
        },
        title: {
            text: props.data.titleText, //!!!
            align: 'center',//*выравнивание по горизонтали 
            floating: true,//*плавающий заголовок - область графика не освобождает место под него 
            y: 5,
            verticalAlign: 'top',//'middle',//*выравнивание по вертикали
            style: {
                fontSize: '20px',
                color: '#0079BE',
                fontWeight: 'bold'
            }
        },
        legend: {
            enabled: false
        },
        xAxis: [{
            visible: false,//*отображение
            type: 'category',
            reversed: true,//*поворот оси наибольшим числом к нач.коорд.
            categories: props.data.categories, //!!!
        },
        {
            visible: false,
            type: 'category',
            reversed: false,
            linkedTo: 0,
            categories: props.data.categories, //!!!
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    inside: true,//*вырпвнивание внутри столбца
                    color: '#FFFFFF',
                    style: {
                        textOutline: 0,
                        fontSize: '20px'
                    }
                },
                pointWidth: 30,
            }
        },

        yAxis: [{
            visible: false, //скрыть ось
            title: {
                text: null
            },
            max: 180000
        }, {
            visible: false,
            title: {
                text: null
            },
            reversed: true,
            max: 180000
        },

        ],
        series: [
            {
                name: props.data.name[0],//!!!
                data: props.data.data[0],//!
                color: props.data.color[0],//!
                yAxis: 0,
                xAxis: 0,
                categories: props.data.categories,//!
            },
            {
                name: props.data.name[1],
                data: props.data.data[1],
                color: props.data.color[1],
                yAxis: 1,
                xAxis: 1,
                categories: props.data.categories,
                dataLabels: {
                    //format: '{point.y} {data3.value}(%)'
                    formatter: function () {
                        let series1 = this.series.chart.series[0].yData[this.point.index];
                        return `${this.y} (${((this.y / series1) * 100)}%)`;
                    }
                },
            }
        ],

    }
    return (
        <div>
            <div className={s.section2}>
                <div className={s.label}>{props.data.label}</div>
                <div className={s.sabLabel}>
                    <div>{props.data.name[0]}</div>
                    <div>{props.data.name[1]}</div>
                </div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    );
}

export default ChartBar;