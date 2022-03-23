import React, {useState} from 'react';
import axios from 'axios';

const Main = () => {

    const [pokemon, setPokemon]=useState([]);

    const onClick = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{
            console.log(response.data.results);
            setPokemon(
                response.data.results
            )
        }).catch(e=>console.log(new Error('fallo al comunicarse con la api')))
        
    }


    return (
        <div>
        <button onClick={onClick}>Axio Pokemon</button>
        <ul className="poks">
            {pokemon? pokemon.map((item,index)=>{
                return (<li key={index}> {item.name} </li>)
            }):null
        }
        </ul>
    </div>
    );
}

export default Main;
