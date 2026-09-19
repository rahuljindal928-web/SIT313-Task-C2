import { useState } from "react";

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

                <h2>Join DEV@Deakin</h2>

                <p>
                    Want to stay updated with DEV@Deakin?
                    Enter your email below and join us.
                </p>

                <form className="subscribeForm" onSubmit={handleSubscribe}>

                    <input
                        type="email"
                        placeholder="Enter your email address"
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
            <footer className="main-footer" id="about">

                <div className="footer-links">

                    <div>
                        <h3>Explore</h3>
                        <p>Home</p>
                        <p>Questions</p>
                        <p>Articles</p>
                        <p>Tutorials</p>
                    </div>

                    <div>
                        <h3>Support</h3>
                        <p>FAQs</p>
                        <p>Help</p>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <h3>Stay connected</h3>

                        <p>
                            Email:
                            <strong> rahul9129.ai25@chitkara.edu.in</strong>
                        </p>

                        <div className="social-links">
                            <span>f</span>
                            <span>X</span>
                            <span>in</span>
                        </div>

                    </div>

                </div>


                <div className="footer-bottom">

                    <h3>DEV@Deakin 2026</h3>

                    <div>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                        <a href="#">Code of Conduct</a>
                    </div>

                </div>

            </footer>
        </>
    );
}

export default Footer;