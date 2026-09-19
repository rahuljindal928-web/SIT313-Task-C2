import bannerImage from "../assets/Deakin University Others(4).jpeg";

function Banner() {
    return (
        <section className="banner">
            <img src={bannerImage} alt="Deakin University" />

            <div className="overlay">
                <h1>Hey, I'm Rahul Jindal</h1>
            </div>
        </section>
    );
}

export default Banner;