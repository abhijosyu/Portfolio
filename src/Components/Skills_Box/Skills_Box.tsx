import "./Skills_Box.css"

interface Skills_Props {
    Years?: string
    Name: string;
}
const Skills_Box: React.FC<Skills_Props> = ({
    Name,
    Years
}) => (

    <div className='Skills_Box'>
        <div className='Skills_Box_Left'>
            <h2> {Name} </h2>
        </div>
        <div className="Skills_Box_Right">
            <h3> {Years} </h3>
        </div>
    </div>
    
)

export default Skills_Box
