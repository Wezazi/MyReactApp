import {Link} from "react-router-dom";
function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    {/* You need to set To="" to the same value that you did in the routes inside app.jsx*/}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li> 
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/profiles">Profiles</Link></li>
                </ul>
            </nav>

        </>
    )

};

export default Navbar;