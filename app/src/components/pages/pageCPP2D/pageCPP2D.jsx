import ChartColumn from '../../charts/chartColumn/chartColumn';
import ChartPie from '../../charts/chartPie/chartPie';
import s from './pageCPP2D.module.css'


const PageCPP2D = (props) => {
    return (
        <div className={s.charts}>
            <ChartColumn data={props.data.chartColumnOne} />
            <ChartPie data={props.data.chartPieOne} />
            <ChartColumn data={props.data.chartColumnTwo} />

        </div>
    )
}

export default PageCPP2D;