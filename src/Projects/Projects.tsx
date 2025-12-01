import React from "react"
import "./Projects.css"
import Projects_Box from "../Components/Projects/Projects_Box"

const Projects: React.FC = () => {

    return (
        <section id='projects'>
            <div className='project'>
                <h1 className='project_text'> FEATURED PROJECTS </h1>
                <div className="projects_container">
                <Projects_Box 
                Site_Link="https://journal-tracker-aa814.web.app/"
                GitHub_Repo_Link="https://github.com/abhijosyu/MindMeld"
                Documentation_Link="https://holistic-pear-355.notion.site/MindMeld-26479801a76e803bbe9ccceea0742968?pvs=74"
                Name="MindMeld"
                Frameworks="Frameworks: Typescript, Python, Google Gemini, React"
                Web_Icon="Web.png"
                GitHub_Icon="GitHub.png"
                Documentation_Icon="Document.png"
                Image="MindMeldIcon.png"
                Description="MindMeld is a web app that allows a user to manage their journal entries seamlessly, 
                using AI to both analyze and summarize specific or all entries. Entries contain a title, date, rating, 
                and text for the user to jot down their thoughts. Each entry can be easily edited either manually or using AI.
                Additionally, users can use the AI chatbot to navigate around the site or answer general questions. "
                  />
                <Projects_Box 
                Site_Link="https://daily-tracker-586a8.web.app/"
                GitHub_Repo_Link="https://github.com/abhijosyu/Trackly"
                Documentation_Link="https://holistic-pear-355.notion.site/Daily-Tracker-24879801a76e80028951ee11118deef3"
                Name="Trackly"
                Frameworks="Frameworks: React, Typescript, Firebase"
                Web_Icon="Web.png"
                GitHub_Icon="GitHub.png"
                Documentation_Icon="Document.png"
                Image="Trackly.png"
                Description="Trackly is a web app that allows a user to manage tasks they have to complete no matter the type of task, 
                or the progress of the task. Each task can be easily customized or deleted at any moment. Additionally, users can 
                place tasks into custom categories and even sort tasks by various properties."
                  />
                </div>
            </div>
        </section>
    )
}


export default Projects
