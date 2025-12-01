import "./Nav_Button.css"

interface Nav_Button_Props {
    Link: string;
    Name: String;
}
const Nav_Button: React.FC<Nav_Button_Props> = ({
    Link,
    Name,
}) => (
    
    <div className='NavButton'>
        <a href={Link}> 
            <button> 
                {Name}
            </button> 
        </a>
    </div>
    
)

export default Nav_Button
