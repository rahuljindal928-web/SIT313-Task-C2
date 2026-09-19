import calorieImage from "../assets/Screenshot 2026-08-22 132829.png";
import workoutImage from "../assets/Screenshot 2026-08-22 132551.png";

function Projects() {
    return (
        <section id="projects">

            <h2>What I've Done So Far</h2>

            <p>
                I have worked on projects using HTML, CSS, JavaScript, and Python,
                and I am continuously improving my skills as a developer.
            </p>

            <div className="project">
                <img src={calorieImage} alt="Calorie Counter" />

                <p>
                    Calorie Counter - A calorie counter with a plate-shaped
                    progress ring and macro tracking.
                </p>
            </div>

            <div className="project">
                <img src={workoutImage} alt="Workout Tracker" />

                <p>
                    Workout Tracker - A workout tracker with a live barbell plate
                    calculator, set logging grouped by exercise, and session
                    volume stats.
                </p>
            </div>

            <hr />

        </section>
    );
}

export default Projects;