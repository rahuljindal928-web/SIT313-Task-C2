
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewPost from "./components/NewPost";

import "./App.css";

function Home() {
    return (
        <>
            <Banner />
            <About />
            <Projects />
            <Gallery />
            <FeaturedArticles />
            <FeaturedTutorials />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/post" element={<NewPost />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
