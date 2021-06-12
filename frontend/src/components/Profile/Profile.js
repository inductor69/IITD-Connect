import "./Profile.css"

export default function Profile(props){
    return(
        <div>
            <img alt="Profile"  src={props.image}></img>
            <h3>Hello</h3>
            <p>{props.name}</p>
            <p>{props.branch}</p>
            <p>{props.year}</p>
            
        </div>
    )
}