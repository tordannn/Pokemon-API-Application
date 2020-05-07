import React from "react";
import './header.css';
import { Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex">
            <h3><Link to="/">Pokemon App</Link></h3>
            <ul className="d-flex">
                <li><Link to="/pokemon/">Pokemon</Link></li>
                <li><Link to="/items/">Items</Link></li>
                <li><Link to="/locations/">Locations</Link></li>
            </ul>
        </div>
    )
}

export default Header