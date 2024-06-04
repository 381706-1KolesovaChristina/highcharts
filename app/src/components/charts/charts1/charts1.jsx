import ChartOne from "./chartOne"
import ChartTwo from "./chartTwo"
import s from './charts1.module.css'


const Charts1 = () => {
    return (
        <div className={s.charts}>
            <ChartOne />
            <ChartTwo />
        </div>
    )
}

export default Charts1;