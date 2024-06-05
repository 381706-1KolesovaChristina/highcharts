import ChartBar from '../../charts/chartBar';
import ChartColumn from '../../charts/chartColumn';
import s from './pageGRR.module.css'
import data from '../../../data'


const PageGRR = () => {
    return (
        <div className={s.charts}>
            <ChartColumn />
            <ChartBar />
        </div>
    )
}

export default PageGRR;