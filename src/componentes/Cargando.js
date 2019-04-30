import React from 'react';
import '../css/cargando.css';


//https://tobiasahlin.com/spinkit/
const Cargando = ()=>{
    return(
        <div className="sk-folding-cube bg-light mt-5">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
        </div>
    );
}
export default Cargando;