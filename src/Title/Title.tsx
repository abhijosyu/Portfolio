import React from "react"
import './Title.css'
import Link_Button from "../Components/Link_Button/Link_Button"

const Title: React.FC = () => {

    return (
        <>

        <div className='Entry'>
          <h1 className="Header_Text">Hi! I'm Abhi</h1>
          <img className='Header_Image' src='Header_Image13.jpg'></img>
          <div className='Header_Button'>
            <Link_Button Link="https://www.linkedin.com/in/abhiram-josyula-ba7426315/" Name="LinkedIn" Image={"LinkedIn.png"}></Link_Button>
            <Link_Button Link="https://github.com/abhijosyu" Name="GitHub" Image={"GitHub.png"}></Link_Button>
            <Link_Button Link="https://drive.google.com/file/d/1pK6_JOd0Idtyf4IrYMSaTu7aYyhN1dnT/view?usp=sharing" Name="Resume" Image={"Paper.png"}></Link_Button>
          </div>
          

        </div>
 
        </>
    )
}



export default Title