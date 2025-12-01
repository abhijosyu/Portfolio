import React from "react"
import './Timeline.css'
import Timeline_Circle from "../Components/Timeline_Circle/Timeline_Circle"
import "../../public/Star.png"

const Timeline: React.FC = () => {

    return (
        <section id='timeline'>

            <div className='timeline_section'>
                <h1 className='timeline_text'>TIMELINE</h1>
                <div className='timeline_container'>
                    <Timeline_Circle Year="Fall 2024" Description="Joined Northeastern University | Java and Dr.Racket Experience"/>
                    <Timeline_Circle Year="Spring 2025" Description="Java, Linear Algebra"/>
                    <Timeline_Circle Year="May 2025" Description="Object Oriented Design"/>
                    <Timeline_Circle Year="June 2025" Description="Learned Typescript, React Basics | Trackly Task Tracker Site Made With Firebase"/>
                    <Timeline_Circle Year="July 2025" Description="Learned Python, APIs, Flask basics"/>
                    <Timeline_Circle Year="August 2025" Description="AI Journal Tracker Site With Google Gemini API"/>
                    <Timeline_Circle Year="Fall 2025" Description="Learning Pandas, NumPy, Altair, Python, MatPlotLib, SQL | Algoritms & Data Structures"/>

                </div>
                <img className="image_timeline4" src="../../public/Star.png"/>
                <img className="image_timeline" src="../../public/Star.png"/>
                <img className="image_timeline2" src="../../public/Star.png"/>
                <img className="image_timeline3" src="../../public/Star.png"/>

            </div>

        </section>
    )
}



export default Timeline
