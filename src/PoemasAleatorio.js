import './PoemasAleatorio.css';
import Poemas from "./static/Poemas.json";

function changePoema(){
    let nList = Object.keys(Poemas).length;
    let idElement = Math.floor(Math.random() * nList);

    if(document.querySelector(".opaco") != null){
        document.querySelector(".opaco").className = '';
    }
    let element = document.getElementById(idElement.toString());
    
    element.className = 'opaco';

    document.querySelector(".info").style.opacity = "0";
}

document.addEventListener('click', changePoema);
document.addEventListener('touch', changePoema);

const PoemasAleatorio = () => {
    const poemas = Poemas.map(item => item.poema);
    
    return (
        <div className="PoemasAleatorio">
            <ul>
            {poemas.map((poema,index) =>
                <li id={index}>
                {poema.map(verso => 
                    <p style={{margin: 0}}>{verso}</p>
                )}
                </li>
            )}
            </ul>
            <spam className="info">Click Me</spam>
        </div>
    );
}

export default PoemasAleatorio;
