import ChartBar from '../../charts/chartBar';
import ChartColumn from '../../charts/chartColumn';
import s from './pageGRR.module.css'



const PageGRR = (props) => {
    return (
        <div className={s.charts}>
            <ChartColumn data={props.data.chartColumnOne} />
            <ChartBar data={props.data.chartBarOne} />
        </div>
    )
}

export default PageGRR;