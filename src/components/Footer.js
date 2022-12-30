import React from "react";
import "../style/footer.css";
import InstagramLogo from "../images/instaIcon.png";

export default function Footer() {
    return (
        <React.Fragment>
            <div className="container-fluid footer-container">
                <div className="container footer-info">
                    <div className="footer-contact-us">
                        <h4>Contact Us</h4>
                        <div className="contact-links">
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-regents@umich.edu"
                                >
                                    Regent&nbsp;/&nbsp;Vice Regent
                                </a>
                            </div>
                            <div className="vertical" />
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-eboard@umich.edu"
                                >
                                    Executive Board
                                </a>
                            </div>
                            <div className="vertical" />
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-corsec@umich.edu"
                                >
                                    Alumni&nbsp;/&nbsp;Interchapter Relations
                                </a>
                            </div>
                            <div className="vertical" />
                            <div className="contact">
                                <a
                                    className="contact-email"
                                    href="mailto:tht-corporate@umich.edu"
                                >
                                    Corporate Sponsorship Events
                                </a>
                            </div>
                        </div>

                        <div className="contact-icon">
                            <a href="https://www.instagram.com/thetatau_umich" target="_blank" rel="noopener noreferrer">
                                <img style= {{width: "5%", height: "5%"}} src={InstagramLogo}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}