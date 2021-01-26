import React from 'react';
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

                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Shishir Pandey</strong></div>
                            <div className="xtext text-muted">Sure!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>

                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Neha K.C.</strong></div>
                            <div className="xtext text-muted">See you tomorrow!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>

                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Barsha Lamichhane</strong></div>
                            <div className="xtext text-muted">link</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>

                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Mayang Sherpa</strong></div>
                            <div className="xtext text-muted">yes</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>

                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Subina Adhikari</strong></div>
                            <div className="xtext text-muted">Watch This!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>

                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Karuna K.C</strong></div>
                            <div className="xtext text-muted">Call me</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Aastha Rai</strong></div>
                            <div className="xtext text-muted">Im out</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Sushma Khadka</strong></div>
                            <div className="xtext text-muted">See ya!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Abin Shrestha</strong></div>
                            <div className="xtext text-muted">Im good!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Rudra Upadhyaya</strong></div>
                            <div className="xtext text-muted">Done?</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Uday Upadhyaya</strong></div>
                            <div className="xtext text-muted">ey yo!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Shankalpa Lamichhane</strong></div>
                            <div className="xtext text-muted">Okay</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>
                <div className="inbox-item">
                    <div className="xcontent">
                        <img src={avatar} alt="avatar"/>
                        <div className="xname-text">
                            <div className="xname"><strong>Jayanti Lamichhane Subdei</strong></div>
                            <div className="xtext text-muted">Tarse!</div>
                        </div>
                    </div>
                    <div className="xtime text-muted">3pm</div>
                </div>


            </div>
        </div>
    )
}

export default ChatList
