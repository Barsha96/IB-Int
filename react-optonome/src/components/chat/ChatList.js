import React from 'react';
import ChatListItem from './ChatListItem';
import avatar from '../../img/chatpage/avatar.png';
import {BiSearch} from 'react-icons/bi';
const ChatList = () => {
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

                <ChatListItem name="Shishir Pandey" lastText="Okay!" time="2:30pm"/>
                <ChatListItem name="Neha Karki" lastText="Byebye" time="2:30pm"/>
                <ChatListItem name="Maiya subdei" lastText="Done" time="2:30pm"/>
                <ChatListItem name="Aastha Rai" lastText="Where are you?" time="2:30pm"/>
                <ChatListItem name="Sudhir wagle" lastText="Okay so my pup chewed all my socks yesterday and I didnt have any to wear thats why I was without any socks at office today! " time="12:30pm"/>
                <ChatListItem name="Champa devi" lastText="Seeya" time="yesterday"/>
                <ChatListItem name="Sushant Pandey" lastText="K cha maiya" time="yesterday"/>
                <ChatListItem name="Jayanti Lamichhane" lastText="message pais?" time="1 week ago"/>
                <ChatListItem name="Rudra Upadhyaya" lastText="aayo aayo" time="1 week ago"/>
                <ChatListItem name="Bismita Paudel" lastText="nani" time="2:30pm"/>
                <ChatListItem name="Arjun Subedi" lastText="good opportunity" time="Nov 12"/>
            </div>
        </div>
    )
}

export default ChatList
