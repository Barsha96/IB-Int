import logo from '../../img/optonome.png';
import hamburger from '../../img/hamburger2.png';
import Links from './Links';
import './home.css';

const Header = () =>
{
    return (
        <div className="header">
            <div className="container navbar">
            <ul className="nav navbar-nav">
                <li>
                <a href="github.com">
                    <img src={logo} alt="optonome-logo" className="nav-logo"/>
                    <span className="nav-text">OPTONOME</span>
                </a>
                </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
                <Links desc="Join Optonome" linkto="medium.com"/>
                <Links desc="Blog" linkto="algoexpert.io" />
                <Links desc="What We Do" linkto="twitter.com" />
                <Links desc="About Us" linkto="instagram.com" />

                <div className="btn toggle-btn">
                <input type="checkbox" className="openSidebarMenu" id="toggle"/>
                <label htmlFor="toggle" className="sidebarIconToggle">
                    <img htmlFor="toggle" className="hamburger" src={hamburger} alt="hamburger"/>
                </label>
                <div id="sidebarMenu">
                    <ul className="sidebarMenuInner">
                    <li><a href="facebook.com">Join Optonome</a></li>
                    <li><a href="facebook.com">Blog</a></li>
                    <li><a href="facebook.com">What We Do</a></li>
                    <li><a href="facebook.com">About Us</a></li>
                    </ul>
                </div>
                </div>
            </ul>
            </div>
        </div>
    );
}

export default Header;