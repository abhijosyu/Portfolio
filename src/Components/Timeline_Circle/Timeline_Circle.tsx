import "./Timeline_Circle.css"

interface Timeline_Circle_Props {
    
    Year: string;
    Description: string;

}
const Timeline_Circle: React.FC<Timeline_Circle_Props> = ({
    Year,
    Description
}) => (

    <div className='Timeline_Circle_Box'>
        <h2> {Year} </h2>
        <p> {Description} </p>
    </div>
    
)

export default Timeline_Circle
