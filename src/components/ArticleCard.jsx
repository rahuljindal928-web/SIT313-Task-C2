function ArticleCard({ article }) {
    return (
        <div className="article-card">

            <img src={article.image} alt={article.title} />

            <h3>{article.title}</h3>

            <p>{article.description}</p>

            <div className="article-info">
                <span>⭐ {article.rating}</span>
                <span>{article.author}</span>
            </div>

        </div>
    );
}

export default ArticleCard;