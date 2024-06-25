import ChartBar from '../../charts/chartBar/chartBar';
import ChartColumn from '../../charts/chartColumn/chartColumn';
import s from './pageGRR.module.css'



const PageGRR = (props) => {
    return (
        <div className={s.charts}>
            <div className={s.chartOne}>
                <ChartColumn data={props.data.chartColumnOne} />
            </div>
            <div className={s.chartTwo}>
                <ChartBar data={props.data.chartBarOne} />
            </div>
        </div>
    )
}

export default PageGRR;