import { Link } from "react-router-dom";
import profileImg from "../images/enplaceholder.png"

function CharacterCard(props) {

const getImgUrl = () =>{ 
    if (props.character.image === "") { 
        return <img src={profileImg}/>;
    }else {
       return <img className="img_card" src={props.character.image} 
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}></img>
    }
}
return (
<>
    <li className="card">
            <Link to={`/item/${props.character.id}`}>
                <img className="img_card" src={props.character.image} 
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
<h3 className="name_card">{props.character.name}</h3>
<p className="species_card">{props.character.species}</p>

</Link>
        </li>
        </>
)
}

export default CharacterCard;