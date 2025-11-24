import "./Link_Button.css"

interface Link_Button_Props {
    Link: string;
    Name: String;
    Image?: string;
}
const Link_Button: React.FC<Link_Button_Props> = ({
    Link,
    Name,
    Image
}) => (

    <div className='LinkButton'>
        <a href={Link} target="_blank"> 
            <button> 
                <img className='LinkImage' src={Image}/>{Name}
            </button> 
        </a>
    </div>
    
)

export default Link_Button
