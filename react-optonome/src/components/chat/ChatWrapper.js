import React from 'react';
import Sidebar from './Sidebar';
import ChatList from './ChatList';
import Chat from './Chat';
import Profile from './Profile';


const ChatWrapper = () => {
    return (
        <div className="chat-container">
            <Sidebar />
            <ChatList />
            <Chat />
            <Profile />
            
        </div>
    )
}

export default ChatWrapper
