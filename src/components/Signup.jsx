
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

        // Validate full name
        if (name.trim().split(/\s+/).length < 2) {
            setError("Please enter your first and last name");
            return;
        }

        // Validate password length
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        // Check confirm password
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            // Check Firebase project
            console.log(
                "Connected Firebase Project:",
                auth.app.options.projectId
            );

            console.log("Starting Firebase registration...");

            // Create user in Firebase Authentication
            const userAccount = await createUserWithEmailAndPassword(
                auth,
                email.trim(),
                password
            );

            console.log("Firebase account created successfully");
            console.log("User UID:", userAccount.user.uid);

            // Save user information in Firestore
            await setDoc(doc(db, "users", userAccount.user.uid), {
                fullName: name.trim(),
                email: userAccount.user.email
            });

            console.log("Firestore profile saved successfully");

            // Logout and redirect to Login page
            await signOut(auth);

            console.log("Registration completed successfully");

            navigate("/login");

        } catch (err) {
            console.error("Signup error:", err.code, err.message);

            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered");
            } else if (err.code === "auth/invalid-email") {
                setError("Please enter a valid email");
            } else if (err.code === "auth/weak-password") {
                setError("Please use a stronger password");
            } else if (err.code === "permission-denied" ||
                       err.code === "firestore/permission-denied") {
                setError("Firestore permission denied. Check database rules.");
            } else {
                setError("Registration failed. Please try again.");
            }

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="signup-page">

            <h2>Create a DEV@Deakin Account</h2>

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

                {error && (
                    <p style={{ color: "red" }}>
                        {error}
                    </p>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create"}
                </button>

            </form>

            <p>
                Already have an account?{" "}
                <Link to="/login">Login</Link>
            </p>

        </div>
    );
}

export default Signup;
