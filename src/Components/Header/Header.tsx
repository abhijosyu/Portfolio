
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
            <Nav_Button Link="https://www.linkedin.com/in/abhiram-josyula-ba7426315/" Name="Timeline" ></Nav_Button>
            <Nav_Button Link="https://www.linkedin.com/in/abhiram-josyula-ba7426315/" Name="About" ></Nav_Button>
            <Nav_Button Link="https://www.linkedin.com/in/abhiram-josyula-ba7426315/" Name="Contact" ></Nav_Button>


        </div>

    </div>
    
)

export default Header