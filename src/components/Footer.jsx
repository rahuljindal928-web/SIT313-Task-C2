
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubscribe(event) {
        event.preventDefault();

        setMessage("Subscribed! Thanks for joining DEV@Deakin.");
        setEmail("");
    }

    return (
        <>
            {/* Newsletter */}
            <section className="newsletter">

                <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

                <p>
                    Want to stay updated with DEV@Deakin?
                    Enter your email below and join us.
                </p>

                <form className="subscribeForm" onSubmit={handleSubscribe}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <button type="submit">
                        Subscribe
                    </button>

                </form>

                <p className="subscribe-message">
                    {message}
                </p>

            </section>

            {/* Footer */}
            <footer className="main-footer" id="contact">

                <div className="footer-links">

                    {/* Explore */}
                    <div>
                        <h3>Explore</h3>

                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/browse">Questions</Link></p>
                        <p><Link to="/browse">Articles</Link></p>
                        <p><a href="/#tutorials">Tutorials</a></p>
                    </div>

                    {/* Support */}
                    <div>
                        <h3>Support</h3>

                        <p><Link to="/faq">FAQs</Link></p>
                        <p><Link to="/help">Help</Link></p>

                        <p>
                            <a href="mailto:rahul9129.ai25@chitkara.edu.in">
                                Contact Us
                            </a>
                        </p>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h3>Stay connected</h3>

                        <p>
                            Email:
                            <strong>
                                <a href="mailto:rahul9129.ai25@chitkara.edu.in">
                                    rahul9129.ai25@chitkara.edu.in
                                </a>
                            </strong>
                        </p>

                        <div className="social-links">

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <h3>DEV@Deakin 2026</h3>

                    <div>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms</Link>
                        <Link to="/conduct">Code of Conduct</Link>
                    </div>

                </div>

            </footer>
        </>
    );
}

export default Footer;
