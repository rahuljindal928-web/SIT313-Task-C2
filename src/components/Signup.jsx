
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSignup(e) {
        e.preventDefault();
        setError("");

        if (name.trim().split(/\s+/).length < 2) {
            setError("Please enter your first and last name");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const userAccount = await createUserWithEmailAndPassword(
                auth, email.trim(), password
            );

            await setDoc(doc(db, "users", userAccount.user.uid), {
                fullName: name.trim(),
                email: userAccount.user.email
            });

            await signOut(auth);
            navigate("/login");

        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered");
            } else if (err.code === "auth/invalid-email") {
                setError("Please enter a valid email");
            } else {
                setError("Registration failed. Please try again.");
                console.error(err);
            }
        }

        setLoading(false);
    }

    return (
        <div className="signup-page">
            <h2>Create an Account</h2>

            <form className="signup-form" onSubmit={handleSignup}>
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create"}
                </button>
            </form>

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Signup;
