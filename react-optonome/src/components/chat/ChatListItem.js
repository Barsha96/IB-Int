import React from 'react';
import avatar from '../../img/chatpage/avatar.png';

const ChatListItem = ({chatItem}) => {


    const generateTime = () => {
        const date = new Date(chatItem.timestamp * 1000);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        return( hours + ":" + minutes);
    }

    return (
        <div>
            <div className="inbox-item">
                    <div className="xcontent">
                        <img src={chatItem.image} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>{chatItem.sender}</strong></div>
                            <div className="xtext text-muted">{chatItem.lastText}</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">{generateTime()}</div>
                </div>
        </div>
    )
}

export default ChatListItem
