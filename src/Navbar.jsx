import {Link, useLocation} from "react-router-dom";
import "./index.css";
function Navbar(){

    /*https://api.reactrouter.com/v8/interfaces/react-router.Location.html*/
    let location = useLocation();
    location = location.pathname;
    /*location.pathname returns the full path to the current page but i only want to keep the current directory without including the parent directories or any slashes*/

    if(location.length == 1){
        location = "Home"; 
    }
    else{
        /*Python rsplit() doesn't exist in Javascript so this is the equivalent:*/
        let index = location.lastIndexOf("/") + 1; /*Returns one index after the last slash in the string, we are gonna use this as starting index for slicing*/
        location = location.slice(index);
    }

    return(
        <>
            <div className="cyber-nav-wrapper">
                <div className="cyber-razor-top"></div>
                <nav className="cyber-nav">
                    
                    <a href="#" className="current orbitron-font">{location}</a>
                    <ul className="cyber-nav__links cyber-glitch-2">
                        {/* You need to set To="" to the same value that you did in the routes inside app.jsx*/}

                        <li><Link className="cyber-nav__link" to="/">Home</Link></li>
                        <li><Link className="cyber-nav__link" to="/projects">Projects</Link></li> 
                        <li><Link className="cyber-nav__link" to="/about">About</Link></li>
                        <li><Link className="cyber-nav__link" to="/terminal">Terminal</Link></li>

                        {/* <li><Link className="cyber-nav__link" to="/profiles">Profiles</Link></li> */}
                    </ul>
                </nav>
                <div className="cyber-razor-bottom"></div>
            </div>
        </>
    )

};

export default Navbar;