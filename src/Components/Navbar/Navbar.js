import React from 'react';
import './Navbar.scss';

export default function Navbar() {
    return <nav className="navbar">
        <img src="https://th.bing.com/th/id/OIP.hDm-WS92eGT_hDgvDFSOxQHaCY?pid=ImgDet&rs=1"
            width="200"
            height="50"/>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    Home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    About
                </a>
            </li>
            <li>
                <a href="/" className="nav-link active">
                    Tours
                </a>
            </li>
        </ul>
    </nav>
}
