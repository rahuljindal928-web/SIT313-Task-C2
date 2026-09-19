function TutorialCard({ tutorial }) {
    return (
        <div className="tutorial-card">

            <img src={tutorial.image} alt={tutorial.title} />

            <h3>{tutorial.title}</h3>

            <p>{tutorial.description}</p>

            <div className="tutorial-info">
                <span>⭐ {tutorial.rating}</span>
                <span>{tutorial.username}</span>
            </div>

        </div>
    );
}

export default TutorialCard;