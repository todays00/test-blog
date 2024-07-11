import { useState } from "react";

const IMAGE_1_URL =
    "https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788_1280.jpg"
const IMAGE_2_URL =
    "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg"
const IMAGE_3_URL =
    "https://cdn.pixabay.com/photo/2024/01/17/15/49/man-8514870_1280.jpg"

export default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);    

    return (
        <div>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 1}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img
                                alt="scenery 1"
                                src={IMAGE_1_URL}
                            />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(3)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(2)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-2"
                        checked={activeImage === 2}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img
                                alt="scenery 2"
                                src={IMAGE_2_URL}
                            />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(1)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(3)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-3"
                        checked={activeImage === 3}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img
                                alt="scenery 3"
                                src={IMAGE_3_URL}
                            />
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={() => setActiveImage(2)}
                                className="carousel__slide-prev"
                            >
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={() => setActiveImage(1)}
                                className="carousel__slide-next"
                            >
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label
                            onClick={() => setActiveImage(1)}
                            className="carousel__dot"
                            id="img-dot-1"
                        ></label>
                        <label
                            onClick={() => setActiveImage(2)}
                            className="carousel__dot"
                            id="img-dot-2"
                        ></label>
                        <label
                            onClick={() => setActiveImage(3)}
                            className="carousel__dot"
                            id="img-dot-3"
                        ></label>
                    </div>
                </ul>
            </div>
        </div>
    );
}