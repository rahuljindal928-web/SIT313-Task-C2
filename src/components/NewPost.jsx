
import { useState } from "react";
import "./NewPost.css";

function NewPost() {

    const [postType, setPostType] = useState("question");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [abstract, setAbstract] = useState("");
    const [article, setArticle] = useState("");
    const [tags, setTags] = useState("");

    function handlePost() {

        if (title.trim() === "" || tags.trim() === "") {
            alert("Please fill all the fields");
            return;
        }

        if (postType === "question" && description.trim() === "") {
            alert("Please describe your problem");
            return;
        }

        if (postType === "article" &&
            (abstract.trim() === "" || article.trim() === "")) {
            alert("Please fill all the article fields");
            return;
        }

        const tagList = tags.split(",").map(tag => tag.trim());

        if (tagList.length > 3 || tagList.some(tag => tag === "")) {
            alert("Please enter 1 to 3 valid tags separated by commas");
            return;
        }

        alert("Your post has been sent successfully!");
    }

    return (
        <div className="new-post">

            <h2>New Post</h2>

            <div>
                <h3>Select Post Type:</h3>

                <label>
                    <input
                        type="radio"
                        name="postType"
                        checked={postType === "question"}
                        onChange={() => setPostType("question")}
                    />
                    Question
                </label>

                <label>
                    <input
                        type="radio"
                        name="postType"
                        checked={postType === "article"}
                        onChange={() => setPostType("article")}
                    />
                    Article
                </label>
            </div>

            {postType === "question" ? (

                <div>
                    <h3>What do you want to ask or share?</h3>

                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Enter a title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Describe your problem</label>
                    <textarea
                        placeholder="Describe your problem here"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label>Tags</label>
                    <input
                        type="text"
                        placeholder="Enter up to 3 tags, separated by commas"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>

            ) : (

                <div>
                    <h3>What do you want to ask or share?</h3>

                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Enter a title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Abstract</label>
                    <textarea
                        placeholder="Enter an abstract"
                        value={abstract}
                        onChange={(e) => setAbstract(e.target.value)}
                    />

                    <label>Article Text</label>
                    <textarea
                        placeholder="Write your article here"
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                    />

                    <label>Tags</label>
                    <input
                        type="text"
                        placeholder="Enter up to 3 tags, separated by commas"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
            )}

            <button onClick={handlePost}>Post</button>

        </div>
    );
}

export default NewPost;
