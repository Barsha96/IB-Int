import React from 'react';
import './chat.css';
import form from '../../img/chatpage/form.png';
import {BsFillInfoCircleFill} from 'react-icons/bs';

import {VscSmiley} from 'react-icons/vsc';
import {MdSend, MdAddCircle} from 'react-icons/md';
import EachChat from './EachChat';


// const showProfileSection = () => {
//     let checkBoxChatlist = document.getElementById("showProfile");
//     console.log(checkBoxChatlist);
//     let profile = document.querySelector(".profile");
//     let chatlist = document.querySelector(".chatlist");
    
//     if (checkBoxChatlist.checked === true){
//         document.querySelector(".chat-container").style.gridTemplateColumns="70px 1fr 250px";
//         document.querySelector(".chat-container").style.gridTemplateAreas='"sidebar chat profile"';
//         chatlist.style.display = "none";
//         profile.style.display = "flex";
//         checkBoxChatlist.checked = false;
//     } 
//   }
      
const Chat = ({allChat}) => {

    return (
        <div className="chat"> 
                <div className="xuser-name"><span className="name">Steve</span>
                    <input type="checkbox" id="showProfile" onClick={console.log('showProfileSection')}/>
                    <label htmlFor="showProfile">
                        <BsFillInfoCircleFill className="i-info"/>
                    </label>
                </div>
                <div className="text-wrapper">
                    
                    {allChat.map((chatData) => (
                        <EachChat key={chatData.timestamp} chatData={chatData}/>
                    ))}
                    

                    {/* <div className="text-date">
                        Tuesday, 23rd July 2020
                    </div> */}
                
                </div>
                {/* need to be changed */}
                <div className="type-bar">
                    <VscSmiley className="i-emo"/>
                    <MdAddCircle className="i-emo"/>
                    <input className="input-text" type="text" placeholder="Type Here"/>
                    <MdSend className="i-emo"/>
                </div>
                
        </div>
    )
}

export default Chat
