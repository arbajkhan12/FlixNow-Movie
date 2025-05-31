import React from 'react';
import "../../App.css"
import { NavLink, useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="dataNav data-icons">
                <NavLink className="ri-arrow-left-line" onClick={() => navigate(-1)} />
            </nav>
            <div className="contact-page">

                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <p>If you have any questions or feedback, feel free to reach out to us.</p>

                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
