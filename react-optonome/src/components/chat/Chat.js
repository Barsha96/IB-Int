import React from 'react';
import './chat.css';
import form from '../../img/chatpage/form.png';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';
import {VscSmiley} from 'react-icons/vsc';
import {MdSend, MdAddCircle} from 'react-icons/md';


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
      
const Chat = () => {
    
    return (
        <div className="chat"> 
                <div className="xuser-name"><span className="name">Shishir Pandey</span>
                    <input type="checkbox" id="showProfile" onClick={console.log('showProfileSection')}/>
                    <label htmlFor="showProfile">
                        <BsFillInfoCircleFill className="i-info"/>
                    </label>
                </div>
                <div className="text-wrapper">
                <div className="xuser-text">
                    <div className="text">Hello Optonome!</div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="user-text">
                   <div className="text">Hello Sir, How can I help you?</div>
                   <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="xuser-text">
                    <div className="text">I want to register now...</div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="text-date">
                    Tuesday, 23rd July 2020
                </div>
                <div className="user-text">
                    <div className="text"><img src={form} alt="formimg"/></div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="user-text">
                    <div className="text">Please fill up the form and submit</div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="xuser-text">
                    <div className="text">Ok, Thank you.</div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="user-text">
                    <div className="text">Also, let me know if you need anything</div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
                <div className="xuser-text">
                    <div className="text">Sure!</div>
                    <div className="loc-time"><HiLocationMarker className="i-loc"/> 12:24pm </div>
                </div>
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
