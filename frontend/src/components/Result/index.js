import { useState } from 'react'
import { Result } from 'antd'

const ResultMessage = ({ type }) => {

    const [ message, setMessage ] = useState("Error, please refresh the page!")

    switch(type){
        case 'warning':
            setMessage('Error fetching data, please refresh the page')
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