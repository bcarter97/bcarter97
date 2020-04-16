import React from 'react';
import bulmerLogo from '../images/made-with-bulma-badges/made-with-bulma.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <a href="https://bulma.io">
                    <img src={bulmerLogo} alt="Made with Bulma" width="128" height="24"></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;