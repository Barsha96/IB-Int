import React from 'react';
import avatar from '../../img/chatpage/avatar.png';

const ChatListItem = ({chatItem}) => {
    return (
        <div>
            <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>{chatItem.sender}</strong></div>
                            <div className="xtext text-muted">{chatItem.lastText}</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">{chatItem.time}</div>
                </div>
        </div>
    )
}

export default ChatListItem
