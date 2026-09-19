import photo1 from "../assets/images/pexels-arun-kachhwaha-860990-35529263.jpg";
import photo2 from "../assets/images/pexels-debitirarmorefotos-34139802.jpg";
import photo3 from "../assets/images/pexels-magda-ehlers-pexels-30495231.jpg";
import photo4 from "../assets/images/pexels-mogilat-3979156.jpg";
import photo5 from "../assets/images/pexels-olly-3916766.jpg";
import photo6 from "../assets/images/pexels-zetong-li-880728-9792417.jpg";

function Gallery() {
    return (
        <section id="photos">

            <h2>My Photos</h2>

            <div className="Gallery">
                <img src={photo1} alt="Gallery photo 1" />
                <img src={photo2} alt="Gallery photo 2" />
                <img src={photo3} alt="Gallery photo 3" />
                <img src={photo4} alt="Gallery photo 4" />
                <img src={photo5} alt="Gallery photo 5" />
                <img src={photo6} alt="Gallery photo 6" />
            </div>

        </section>
    );
}

export default Gallery;