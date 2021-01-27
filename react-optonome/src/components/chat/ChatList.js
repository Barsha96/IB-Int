import React from 'react';
import ChatListItem from './ChatListItem';
import avatar from '../../img/chatpage/avatar.png';
import {BiSearch} from 'react-icons/bi';



const ChatList = ({chatList}) => {

    return (
        <div className="chatlist"> 
            <div className="search">
                <form>
                    <button className="search-button">
                        <BiSearch className="i-search"/>
                    </button>
                    <input type="text" placeholder="Search"/>
                </form>
            </div>

            <span>Chats</span>

            <div className="inbox-list">
                {chatList.map((chat) => (
                    <ChatListItem key={chat.id} chatItem={chat}/>
                ))}
            
            </div>
        </div>
    )
}

export default ChatList
