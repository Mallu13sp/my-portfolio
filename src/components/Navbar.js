import {Link} from 'react-router-dom';
import"./Navbar.css"
function Navbar(){
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/components/About">About</Link></li>
                <li><Link to="/components/Education">Education</Link></li>
                <li><Link to="/components/Skills">Skills</Link></li>
                <li><Link to="/components/Certifications">Certifications</Link></li>
                <li><Link to="/components/Projects">Projects</Link></li>
            </ul>
        </div>
    );
}
export default Navbar;