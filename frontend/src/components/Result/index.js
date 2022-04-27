import { useState } from 'react'
import { Result } from 'antd'

const ResultMessage = ({ type }) => {

    const [ message, setMessage ] = useState("Error, please refresh the page!")

    switch(type){
        case 'error':
            setMessage('Error fetching data, please refresh the page')
        break;
        case 'warning':
            setMessage('There is no vehicle assigned to this driver!')
        break;

        default:
        break;
    }

    return (
        <div className="center-container">
        <Result status={type}  title={message} />
        </div>
    )
}

export default ResultMessage;