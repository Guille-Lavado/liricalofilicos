import React from 'react';
import ReactDOM from 'react-dom/client';
import PoemasAleatorio from './PoemasAleatorio';
import ListaPoemas from './ListaPoemas';
import Nabvar from './nabvar';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <Nabvar />
            <div className="body">
                <PoemasAleatorio />
                <ListaPoemas />
            </div>
    </React.StrictMode>
);
