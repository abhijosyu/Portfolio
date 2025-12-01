import React from "react"
import './Skills.css'
import Skills_Box from "../Components/Skills_Box/Skills_Box"

const Skills: React.FC = () => {

    return (
        <section id='skills'>
        <div className='skills_total'>
            <div className='skills_section'>
                <h1 className='skills_text'> SKILLS & COURSES </h1>
            </div>
            <div className='skills_container'>
                <Skills_Box Name='Typescript' Years='6 Months'></Skills_Box> 
                <Skills_Box Name='Javascript' Years='6 Months'></Skills_Box> 
                <Skills_Box Name='Java' Years='2 Years'></Skills_Box> 
                <Skills_Box Name='Python' Years='6 Months'></Skills_Box> 
                <Skills_Box Name='React' Years='6 Months'></Skills_Box> 
                <Skills_Box Name='Firebase' Years='6 Months'></Skills_Box> 
                <Skills_Box Name='Flask' Years='3 Months'></Skills_Box> 
                <Skills_Box Name='Render' Years='3 Months'></Skills_Box> 
                <Skills_Box Name='Pandas' Years='3 Months'></Skills_Box> 
                <Skills_Box Name='Altair' Years='3 Months'></Skills_Box>
                <Skills_Box Name='Seaborn' Years='3 Months'></Skills_Box>
                <Skills_Box Name='MatPlotLib' Years='3 Months'></Skills_Box>
                <Skills_Box Name='SQL' Years='1 Month'></Skills_Box> 
                <Skills_Box Name='Algorithms & Data Structures' Years='2025'></Skills_Box> 
                <Skills_Box Name='Object Oriented Design' Years='2025'></Skills_Box> 
                <Skills_Box Name='Linear Algebra' Years='2025'></Skills_Box> 
                <Skills_Box Name='Foundations of Data Science ' Years='2025'></Skills_Box> 

 


            </div>
        </div>
        </section>
    )
}



export default Skills
