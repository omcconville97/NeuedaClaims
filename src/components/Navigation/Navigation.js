import "./Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="navigationBar">

            <div className="logoStyle">
              <span className="claims">Claims</span>
              <span className="first">1st</span>
            </div>

            <ul className="navigationLinks">
              <li className="parent"><Link to="/" className="link">Home</Link></li>
              <li className="parent"><Link to="/newclaim" className="link" >New Claim</Link></li>
              <li className="parent" id="clients"><Link to="/openclaims" className="link">Open Claims</Link></li>
              <li className="parent"><Link to="/find" className="link">Search</Link></li>
              <li className="parent"><Link to="/tasks" className="link">Tasks</Link></li>
            </ul>

        </nav>
    )


}

export default Navigation;