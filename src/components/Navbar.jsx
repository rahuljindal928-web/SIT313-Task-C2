
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setShowDropdown(false);
        });

        return () => unsubscribe();
    }, []);

    // Close profile menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function closeMenu() {
        setMenuOpen(false);
        setShowDropdown(false);
    }

    async function handleLogout() {
        try {
            await signOut(auth);
            closeMenu();
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <nav className="navbar">

            <Link to="/" className="logo" onClick={closeMenu}>
                DEV@Deakin
            </Link>

            <input
                type="text"
                placeholder="Search..."
                className="search"
                aria-label="Search"
            />

            <div
                id="navbar-links"
                className={`nav-links ${menuOpen ? "active" : ""}`}
            >
                <a href="/#about" onClick={closeMenu}>About</a>
                <a href="/#projects" onClick={closeMenu}>Work</a>
                <a href="/#contact" onClick={closeMenu}>Contact</a>
                <Link to="/post" onClick={closeMenu}>Post</Link>
            </div>

            {/* Login or profile stays outside hamburger menu */}
            <div className="nav-account">
                {user ? (
                    <div className="profile-container" ref={dropdownRef}>
                        <button
                            type="button"
                            className="profile-icon"
                            onClick={() => setShowDropdown(!showDropdown)}
                            aria-label="Profile menu"
                            aria-expanded={showDropdown}
                        >
                            {(user.email || "U").charAt(0).toUpperCase()}
                        </button>

                        {showDropdown && (
                            <div className="profile-dropdown">
                                <div className="profile-email">
                                    {user.email}
                                </div>

                                <hr />

                                <button
                                    type="button"
                                    className="dropdown-logout"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="login-btn"
                        onClick={closeMenu}
                    >
                        Login
                    </Link>
                )}
            </div>

            <button
                type="button"
                className="hamburger"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                    setShowDropdown(false);
                }}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                aria-controls="navbar-links"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

        </nav>
    );
}

export default Navbar;
