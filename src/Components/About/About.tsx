import "./About.scss"
import bebop from "../../res/pics/bebop.png";
import { FaGithub, FaYoutube } from 'react-icons/fa';


export default function About(){
    return(
        <>
          <div className="about-me-wrapper">
            <div className="first-section">
                <div className="profile-column">
                    <h1 className="ps">Jarvx</h1>
                    <img src={bebop} ></img>
                    <p className="jb">Insanely cool</p>
                </div>
                <p className="jb about-text"> 
                Hey there, I'm Jarvx, a 10th grade computer science student passionate about competitive programming, web development, and Linux. I'm always up for a coding challenge and optimizing algorithms. When it comes to web development, I enjoy working with the React framework, crafting responsive and stylish user interfaces with Tailwind CSS and SCSS. Linux is my playground, where I explore different distributions, write scripts, and customize my system. It's a thrilling journey, and I'm loving every minute of it!
                </p>
            </div>
            <div className="second-section">
                <a href="https://github.com/Jarvx404/" target="_blank" className="social-link rainbow-text-1"><FaGithub></FaGithub></a>
                <a href="https://www.youtube.com/channel/UCLf0qunilq-pWVSf_VhoxKw" target="_blank" className="social-link"><FaYoutube></FaYoutube></a>
            </div>
          </div>
        </>
    );
}