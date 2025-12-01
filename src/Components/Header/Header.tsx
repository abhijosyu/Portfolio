
import React from "react"
import Nav_Button from "../Nav_Button/Nav_Button"
import "./Header.css"
const Header: React.FC = ({
  
}) => (

    <div className='Header'>
        <div className='Left'>
            <p> Abhiram Josyula </p> 
        </div>
        <div className='Middle'>
            <Nav_Button Link="#projects" Name="Projects" ></Nav_Button>
            <Nav_Button Link="#skills" Name="Skills" ></Nav_Button>
            <Nav_Button Link="#about" Name="About" ></Nav_Button>
            <Nav_Button Link="#timeline" Name="Timeline" ></Nav_Button>

        </div>

    </div>
    
)

export default Header