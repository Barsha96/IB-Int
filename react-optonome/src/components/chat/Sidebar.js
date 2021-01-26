import React from 'react';
import logo from '../../img/chatpage/optonome-logo.png';
import avatar from '../../img/chatpage/avatar.png';
import {BsBellFill} from 'react-icons/bs';
import {MdComment} from 'react-icons/md';
import {RiTeamFill} from 'react-icons/ri';
import {AiOutlineFileText} from 'react-icons/ai';
import {FaUserPlus} from 'react-icons/fa';
import {AiFillAppstore} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';

const Sidebar = () => {
    return (
            <div className="sidebar"> 
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <span>Optonome</span>
                    <div className="user">
                        <img src={avatar} alt="avatar"/>
                        <span>John Doe</span>
                    </div>
                </div>

                <div><ul className="sidebarIn"> 
                    <li><a href="github.com" className="sidebar-element">
                        <BsBellFill className="i-sidebar"/>
                        <span>Activity</span></a>
                    </li>
                    <li><a href="github.com" className="sidebar-element">
                        <MdComment className="i-sidebar"/>
                        <span>Chats</span></a>
                    </li>
                    <li><a href="github.com" className="sidebar-element">
                        <RiTeamFill className="i-sidebar"/>
                        <span>Teams</span></a>
                    </li>
                    <li><a href="github.com" className="sidebar-element">
                        <AiOutlineFileText className="i-sidebar"/>
                        <span>Forms</span></a>
                    </li>
                    <li><a href="github.com" className="sidebar-element">
                        <FaUserPlus className="i-sidebar"/>
                        <span>Invite</span></a>
                    </li>
                    <li><a href="github.com" className="sidebar-element">
                        <AiFillAppstore className="i-sidebar"/>
                        <span>App</span></a>
                    </li> 
                </ul></div>
                <div className="settings">
                    <a href="github.com">
                        <FiSettings className="i-sidebar"/>
                    </a>
                </div>    
        </div>

    )
}

export default Sidebar
