import React from 'react';
import avatar from '../../img/chatpage/avatar.png';

const ChatListItem = ({name, lastText, time}) => {
    return (
        <div>
            <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>{name}</strong></div>
                            <div className="xtext text-muted">{lastText}</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">{time}</div>
                </div>
        </div>
    )
}

export default ChatListItem
