import "./nabvar.css";

function movePoemasAleatorio(){
    document.querySelector(".body").style.left = '0'
}
function moveListaPoemas(){
    document.querySelector(".body").style.left = '-100vw';
}

const Nabvar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><button onClick={movePoemasAleatorio}>Poemas Aleatorio</button></li>
                <li><button onClick={moveListaPoemas}>Lista Poemas</button></li>
            </ul>
        </nav>
    );
}

export default Nabvar;
