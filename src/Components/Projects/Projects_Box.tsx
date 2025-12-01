import Link_Button from "../Link_Button/Link_Button";
import "./Projects_Box.css"

interface Projects_Props {
    Site_Link: string;
    GitHub_Repo_Link: string;
    Documentation_Link: string;
    Name: string;
    Frameworks: string;
    Image: string;
    Description: string;
    GitHub_Icon: string;
    Web_Icon: string;
    Documentation_Icon: string;

}
const Projects_Box: React.FC<Projects_Props> = ({
    Site_Link,
    Name,
    Frameworks,
    Image,
    GitHub_Repo_Link,
    Documentation_Link,
    Description,
    GitHub_Icon,
    Web_Icon,
    Documentation_Icon
}) => (

    <div className='Project_Box'>
        <h1> {Name} </h1>
        <h3> {Frameworks} </h3>
        <img src={Image} />
        <p> {Description} </p>
        <div className='Buttons_Project'>
            <Link_Button Link={Site_Link} Image={Web_Icon}/>
            <Link_Button Link={GitHub_Repo_Link} Image={GitHub_Icon}/>
            <Link_Button Link={Documentation_Link} Image={Documentation_Icon}/>
        </div>
    </div>
    
)

export default Projects_Box
