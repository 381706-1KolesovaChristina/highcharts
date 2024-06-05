import ChartBar from '../../charts/chartBar';
import ChartColumn from '../../charts/chartColumn';
import s from './pageCPP2D.module.css'


const PageCPP2D = () => {
    return (
        <div className={s.charts}>
            <ChartBar />
        </div>
    )
}

export default PageCPP2D;