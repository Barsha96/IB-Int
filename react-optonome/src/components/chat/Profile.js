import React from 'react';
import avatar from '../../img/chatpage/avatar.png';
import {ImCross} from 'react-icons/im';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {AiFillFilePdf} from 'react-icons/ai';
import {AiOutlineFileImage} from 'react-icons/ai';
import {AiOutlineFileText} from 'react-icons/ai';


// const hideProfileSection = () => {
//     let checkBoxProfile = document.getElementById("hideProfile");
//     let profile = document.querySelector(".profile");
//     let chatlist = document.querySelector(".chatlist");

//     if (checkBoxProfile.checked === true){
//         document.querySelector(".chat-container").style.gridTemplateColumns="70px 300px 1fr";
//         document.querySelector(".chat-container").style.gridTemplateAreas='"sidebar chatlist chat"';
//         chatlist.style.display = "initial";
//         profile.style.display = "none";
//         checkBoxProfile.checked = false;
//     } 
// }

const Profile = () => {

    return (
        <div className="profile" id="profile"> 
            <div className="profileToggle">
                <input type="checkbox" id="hideProfile" onClick={console.log("hideProfileSection")}/>
                <label htmlFor="hideProfile">
                    <ImCross className="fa-times"/>
                    <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                </label>
            </div>
            <div className="xuser-info">
                <div className="user-image">
                    <img src={avatar} alt="avatar"/>
                </div>
                <span className="xname-profile">Shishir Pandey</span>
                <div className="xname-address">
                    Chandragiri, Kathmandu
                </div>
                </div>

                <div className="xfunctions">
                    <div className="func">
                        <FaRegCalendarAlt value={{size:"3em"}} className="i-calendar"/>
                        <span>Schedule a meeting</span>
                    </div>
                    <div className="func">
                        <BsFillPersonPlusFill className="i-user"/>
                        <span>Add to team</span>
                    </div>
                    <div className="func">
                        <RiDeleteBin6Line className="i-trash"/>
                        <span>Delete Conversation</span>
                    </div>
                </div>

                <div className="files">
                <h3><strong>Shared Files</strong></h3>
                <div className="items">
                    <div className="files-items">
                        <AiFillFilePdf className="i-files"/>
                        <span>File1</span>
                    </div>
                    <div className="files-items">
                        <AiOutlineFileImage className="i-files"/>
                        <span>File1</span>
                    </div>
                    <div className="files-items">
                        <AiOutlineFileImage className="i-files"/>
                        <span>File1</span>
                    </div>
                    <div className="files-items">
                        <AiFillFilePdf className="i-files"/>
                        <span>File1</span>
                    </div>
                    <div className="files-items">
                        <AiOutlineFileText className="i-files"/>
                        <span>File1</span>
                    </div>
                    <div className="files-items">
                        <AiFillFilePdf className="i-files"/>
                        <span>File1</span>
                    </div>
                    <div className="files-items">
                        <AiOutlineFileText className="i-files"/>
                        <span>File1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
