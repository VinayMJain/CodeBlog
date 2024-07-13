import React from "react";
import styles from './HeroSection.module.css';
import Button from "../../common/Button/Button";
import Footer from '../../common/Footer/Footer';
function HeroSection(){
    return (
        <section 
            className={styles.indexFirst}
            id="indexFirstId"
        >
            <div 
                className={styles.flexContainer}
                id="flexContainerId"
            >
                <div 
                    className={styles.info}
                    id="infoId"
                >
                    <div 
                        className={styles.hashtag}
                        id="hashtagId"
                    >
                        &nbsp;&nbsp;#CodeWithoutLimits
                    </div>
                    <h1 
                        id="firstHeadingId"
                    >
                        Elevate Your Code on CodeBlog
                    </h1>
                    <p
                        id="firstparaId"
                    >
                        Unlock coding potential with tutorials, trends, and a vibrant community. Start for free. Code. Connect. Create.
                    </p>
                    <div 
                        className={styles.buttonContainer}
                        id="buttonsContainerId"
                    >
                        {/* <a 
                            className={styles.exploreButton}
                            href="Login.html"
                        ></a> */}
                        <Button id="exploreButtonId" buttonText="Explore →"/>
                        {/* <button className="subscribe-button"><a href="Login.html">→</a></button> */}
                    </div>
                </div>
                <div 
                    className={styles.hexagonContainer}
                    id="hexagonContainerId"
                >
                    <img 
                        alt="Image"
                        src="images/blog1.webp" 
                    />
                    <svg 
                        className="hexagon-clip" 
                        height="0"
                        width="0" 
                    >
                        <clipPath 
                            clipPathUnits="objectBoundingBox"
                            id="hexagon-clip-path" 
                        >
                            <polygon points="0.0795 0.2728,
                            0.212889 0.059377 ,0.32002 0,
                            0.80 0, 0.875725 0.0428747,
                            0.97427525 0.2071254 , 1 0.3,
                            1 0.86 , 0.86 1,
                            0.5 1 , 0.42 0.96,
                            0.09 0.52" />
                            <circle cx="0.5" cy="0.9" r="0.1" />
                            <circle cx="0.86" cy="0.86" r="0.14" />
                            <circle cx="0.819484095" cy="0.3" r="0.180515905" />
                            <circle cx="0.8" cy="0.0883095" r="0.0883095" />
                            <circle cx="0.32002" cy="0.126334" r="0.126334" />
                            <circle cx="0.26501" cy="0.38874" r="0.2187602425" />
                        </clipPath>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;