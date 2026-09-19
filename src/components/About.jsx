import profileImage from "../assets/IMG_4811 (1).PNG";

function About() {
    return (
        <section id="info" className="about">

            <img src={profileImage} alt="Rahul Jindal" />

            <p>
                I am a BE student in AI & ML at Chitkara University.
                I am interested in web development, programming, and technology.
                I enjoy building projects and learning new skills through practical work.
            </p>

            <hr />

        </section>
    );
}

export default About;