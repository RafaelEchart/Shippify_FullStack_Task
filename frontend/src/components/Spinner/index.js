import { Spin } from 'antd'
import './style.css'

const SpinLoading = ({ size}) => (
    <div className="center-container">

    <Spin size={size} />
    </div>
)

export default SpinLoading;