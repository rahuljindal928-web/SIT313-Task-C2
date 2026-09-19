import ArticleCard from "./ArticleCard";

import reactImage from "../assets/images/react.jpg";
import nodeImage from "../assets/images/nodejs.png";
import hooksImage from "../assets/images/react_hooks.jpg";

function FeaturedArticles() {

    const articles = [
    {
        id: 1,
        title: "React",
        description: "React is used for building modern and interactive user interfaces.",
        rating: 5,
        author: "Rahul",
        image: reactImage
    },

    {
        id: 2,
        title: "NodeJS",
        description: "NodeJS allows JavaScript to run outside the browser and is used for backend development.",
        rating: 5,
        author: "Lovish",
        image: nodeImage
    },

    {
        id: 3,
        title: "React Hooks",
        description: "React Hooks are used to manage state and other features inside functional components.",
        rating: 5,
        author: "Lucky",
        image: hooksImage
    }
];
    return (
        <section className="featured-articles">

            <h2>Featured Articles</h2>

            <div className="article-container">

                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}

            </div>

            <button className="see-all">
                See all articles
            </button>

        </section>
    );
}

export default FeaturedArticles;