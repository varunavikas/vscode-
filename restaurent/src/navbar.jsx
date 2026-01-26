import {link} from "react-router-dom";


function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <ul>
                    <li><link to = {"/Home"} className="a">home</link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;