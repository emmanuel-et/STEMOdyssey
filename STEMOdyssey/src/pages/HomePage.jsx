import '../styles/HomePage.css';
import math from "../images/math.jpg";
import science from "../images/science.png";
import technology from "../images/technology.png";
import engineer from "../images/engineer.png";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="container">
                <div className='topbar'>
                    STEM Odyssey
                </div>
                <div className='instr'>
                    Pick Your Study Category!
                </div>
                <div className="image-container">

                    <div className="game-card">
                        <img src= {math} alt="Image 1" />
                        <div className='game-text' onClick={() => {navigate("/math")}}>Mathematics</div>
                    </div>

                    <div className="game-card">
                    <img src={science} alt="Image 2" />
                    <div className='game-text' onClick={() => {navigate("/")}}>Science</div>
                    </div>

                    <div className="game-card">
                    <img src={technology} alt="Image 3" />
                    <div className='game-text' onClick={() => {navigate("/cs")}}>Technology</div>
                    </div>
                    
                    <div className="game-card">
                    <img src={engineer} alt="Image 4" />
                    <div className='game-text' onClick={() => {navigate("/")}}>Engineer</div>
                    </div>
                    
                </div>

            </div>
        </>
    )
};

export default HomePage;