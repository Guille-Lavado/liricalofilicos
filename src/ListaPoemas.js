import './ListaPoemas.css';
import Poemas from "./static/Poemas.json";

const ListaPoemas = () => {
    const poemas = Poemas.map(item => item.poema);
    
    return (
        <div className="ListaPoemas">
            <ul>
            {poemas.map((poema,index) =>
                <li id={index}>
                {poema.map(verso => 
                    <p style={{margin: 0}}>{verso}</p>
                )}
                </li>
            )}
            </ul>
        </div>
    );
}

export default ListaPoemas;
