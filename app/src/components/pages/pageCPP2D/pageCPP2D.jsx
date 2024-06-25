import ChartColumn from '../../charts/chartColumn/chartColumn';
import s from './pageCPP2D.module.css'


const PageCPP2D = (props) => {
    return (
        <div className={s.charts}>
            <ChartColumn data={props.data.chartColumnOne} />
            <ChartColumn data={props.data.chartColumnTwo} />
        </div>
    )
}

export default PageCPP2D;