import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpenNav = () => {
        setOpen(!open)
    }

    return (
        <header className="header">
            <div className="logo">
                <h1 className='font-bold'>
                    <a href="/*">VoNo</a>
                </h1>
            </div>
            <nav className="nav">
                <ul className={open ? 'active' : ''}>
                    <li><Link to="*">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button className='x_mobile' onClick={handleOpenNav}>X</button>
                </ul>
            </nav>
            <div className="button-container">
                <Button variant="secondary">Let's Talk</Button>
            </div>
            <Button
                onClick={handleOpenNav}
                className='button_mobile'
                variant="secondary">Open</Button>
        </header>
    );
}

export default Header;