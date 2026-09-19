import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <Projects />
            <Gallery />
            <FeaturedArticles />
            <FeaturedTutorials />
            <Footer />
        </>
    );
}

export default App;