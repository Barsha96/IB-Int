import React from 'react';
import {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import ChatList from './ChatList';
import Chat from './Chat';
import Profile from './Profile';


const ChatWrapper = () => {

    const [chats, setChats] = useState([])
    const [allChat, setAllChat] = useState([])

    useEffect(() => {
        const getChats = async () => {
            const chatsFromServer = await fetchChats()
            setChats(chatsFromServer)
        }

        const getAllChat = async () => {
            const allChatFromServer = await fetchAllChat()
            setAllChat(allChatFromServer)
        }

        getChats()
        getAllChat()
    }, [])

    // fetch chats from server
    const fetchChats = async () => {
        const res = await fetch('http://localhost:5000/chat');
        const data = await res.json();
        return data;
    }

    const fetchAllChat = async () => {
        const res = await fetch('http://localhost:5000/allText');
        const texts = await res.json();
        console.log(texts)
        return texts;
    }

    // const hideProfileSection = () => {
    // let checkBoxProfile = document.getElementById("hideProfile");
    // let profile = document.querySelector(".profile");
    // let chatlist = document.querySelector(".chatlist");

    // if (checkBoxProfile.checked === true){
    //     document.querySelector(".chat-container").style.gridTemplateColumns="70px 300px 1fr";
    //     document.querySelector(".chat-container").style.gridTemplateAreas='"sidebar chatlist chat"';
    //     chatlist.style.display = "initial";
    //     profile.style.display = "none";
    //     checkBoxProfile.checked = false;
    //     } 
    // }

    return (
        <div className="chat-container">
            <Sidebar />
            <ChatList chatList={chats} />
            <Chat allChat={allChat}/>
            <Profile />
            
        </div>
    )
}

export default ChatWrapper
