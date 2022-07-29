import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




const Footer = () => {
    return (
        <div className="footer-main-container">
            <footer className="footer-container">
                <div className="icon-container">
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </footer>
        </div>
    )
}

export default Footer
