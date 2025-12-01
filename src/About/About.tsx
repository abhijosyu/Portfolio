import React from "react"
import './About.css'

const About: React.FC = () => {

    return (
        <section id='about'>

            <div className='about_section'>
                <h1 className='about_text'>ABOUT</h1>
                <div className='about_container'>
                    <div className='about_box1'>
                        <div className='about_box1_text'>
                            <p> Hi! I am a 2nd year computer science student at Northeaster with a concentration in AI.</p>
                            <p> My interest in coding started with creating games and animations on a platform called Scratch.</p>
                            <p> I've explored the interest in middle school & high school through taking technology focused classes.</p>
                            <p> Today, I study at Northeastern’s Khoury College of Computer Sciences, where I focus on building</p>
                            <p> real web applications and exploring how AI can improve everyday experiences. I enjoy designing </p>
                            <p> and developing full-stack projects, working with large datasets, and creating visualizations that</p>
                            <p> uncover meaningful patterns in data. Across my coursework and personal projects, I’ve developed a</p> 
                            <p> strong interest in bridging web development, data, and AI, and I’m always looking for new ways to </p>
                            <p> build tools that help people.</p>
                        </div>
                        <img className="image_about" src="../../public/Northeastern.jpg"/>
                    </div>
                </div>
        
            </div>

        </section>
    )
}



export default About
