import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CCarousel from "../components/CCarousel";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <CCarousel />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;

