
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    async function handleLogout() {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

    return (
        <nav className="navbar">
            <Link to="/" className="logo">DEV@Deakin</Link>

            <input type="text" placeholder="Search..." className="search" />

            <div className="nav-links">
                <Link to="/post">Post</Link>

                {user ? (
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
