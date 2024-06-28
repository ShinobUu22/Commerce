import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>
                        Latest Collection
                    </div>
                    <img src={arrow} alt="" />
                </div>
            </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />
                </div>
        </div>
    );
};

export default hero;
