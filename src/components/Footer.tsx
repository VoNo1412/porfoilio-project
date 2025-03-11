import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="logo">VoNo</div>
            <nav className="nav">
                <ul>
                    <li><Link to="*">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className='copy'>© All rights reserved by <span>Vũ Xuân Huy</span> </div>
        </footer>
    );
};

export default Footer;