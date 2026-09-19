import TutorialCard from "./TutorialCard";

import es6Image from "../assets/images/es6.jpg";
import routerImage from "../assets/images/react_router.jpg";
import expressImage from "../assets/images/express(2).png";

function FeaturedTutorials() {

   const tutorials = [
    {
        id: 1,
        title: "JavaScript ES6",
        description: "Learn modern JavaScript features such as let, const, arrow functions and more.",
        rating: 5,
        username: "Harsh",
        image: es6Image
    },

    {
        id: 2,
        title: "React Router",
        description: "Learn how React Router is used to move between different pages in a React application.",
        rating: 5,
        username: "Simran",
        image: routerImage
    },

    {
        id: 3,
        title: "ExpressJS",
        description: "Learn how ExpressJS is used to create simple backend servers and APIs.",
        rating: 4.9,
        username: "Arihant",
        image: expressImage
    }
];

    return (
        <section className="featured-tutorials">

            <h2>Featured Tutorials</h2>

            <div className="tutorial-container">

                {tutorials.map((tutorial) => (
                    <TutorialCard
                        key={tutorial.id}
                        tutorial={tutorial}
                    />
                ))}

            </div>

            <button className="see-all">
                See all tutorials
            </button>

        </section>
    );
}

export default FeaturedTutorials;