import React from 'react';
import {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import ChatList from './ChatList';
import Chat from './Chat';
import Profile from './Profile';


const ChatWrapper = () => {

    const [chats, setChats] = useState([])

    useEffect(() => {
        const getChats = async () => {
            const chatsFromServer = await fetchChats()
            setChats(chatsFromServer)
        }

        getChats()
    }, [])

    // fetch chats from server
    const fetchChats = async () => {
        const res = await fetch('http://localhost:5000/chat');
        const data = await res.json();
        console.log(data)
        return data;
    }

    return (
        <div className="chat-container">
            <Sidebar />
            <ChatList allChats={chats} />
            <Chat />
            <Profile />
            
        </div>
    )
}

export default ChatWrapper
