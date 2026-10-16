import "./About.css";

function About (){
    return (
        <section className="about">
            <div className="about-images">
                <img src="https://i.pinimg.com/736x/94/fc/4d/94fc4d4a7350e8c782862037ac22c872.jpg" 
                alt="Windscreen Replacement" 
                className="about-image" />

                <img src="https://i.pinimg.com/1200x/91/11/cf/9111cffa466a8a4264e07393b41da8b5.jpg" 
                alt="Vehicle Glass Repair" 
                className="about-image" />

                <img src="https://i.pinimg.com/1200x/bf/52/64/bf526484a697081956c434017d5c739a.jpg" 
                alt="Car Window Replacement" 
                className="about-image" />
            </div>

             <div className="about-content"> 
                <h2>About Us</h2>
                <p> We provide reliable and professional windscreen services, helping customers get back on the road safely and confidently. </p>

                <p> Our focus is on quality workmanship, dependable service, and making the windscreen replacement process simple for our customers. </p>

                <button className="about-button">
                    Learn More
                </button>
                </div>
                </section>
    );
}

export default About;