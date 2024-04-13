import '../styles/HomePage.css';
import math from "../images/math.jpg";
import science from "../images/science.png";
import technology from "../images/technology.png";
import engineer from "../images/engineer.png";

const HomePage = () => {
    
    return (
        <>
            <div className="container">
                <div className='topbar'>
                    STEM Odyssey
                </div>
                
                <div className="image-container">
                    <div className="game-card">
                        <img src= {math} alt="Image 1" />
                        <div className='game-text'>Mathematica</div>
                    </div>

                    <div className="game-card">
                    <img src={science} alt="Image 2" />
                    <div className='game-text'>Science</div>
                    </div>
                    <img src={technology} alt="Image 3" />
                    <div className='game-text'>Technology</div>
                    <img src={engineer} alt="Image 4" />
                </div>

            </div>
        </>
    )
};

export default HomePage;