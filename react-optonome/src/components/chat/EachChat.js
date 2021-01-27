import React from 'react'
import {HiLocationMarker} from 'react-icons/hi';

const EachChat = ({chatData}) => {
    
    console.log(chatData)

    const generateTime = () => {
            const date = new Date(chatData.timestamp * 1000);
            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);
            return( hours + ":" + minutes);
    }

    const generateClass = () => {
        return(chatData.receiver==="barsha" ? "xuser-text" : "user-text")
    }

    return (
        <div className={generateClass()}>
                   <div className="text">{chatData.text}</div>
                   <div className="loc-time"><HiLocationMarker className="i-loc"/> {generateTime()} </div>
        </div>
    )
}

export default EachChat
