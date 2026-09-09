import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Contact />
        </>
    );
}

export default Home;

