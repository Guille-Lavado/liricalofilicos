import './ListaPoemas.css';
import Poemas from "./static/Poemas.json";

const ListaPoemas = () => {
    return (
        <div className="ListaPoemas">
            <ul>
            {Poemas.map((poema,index) =>
                <li id={index}>
                <h3>{poema.name}</h3>
                {poema.poema.map(verso => 
                    <p style={{margin: 0}}>{verso}</p>
                )}
                <p className="autor">-- {poema.autor}</p>
                </li>
            )}
            </ul>
        </div>
    );
}

export default ListaPoemas;
