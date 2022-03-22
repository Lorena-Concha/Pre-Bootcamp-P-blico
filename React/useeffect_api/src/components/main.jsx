import React, {useState} from 'react';

const PokemonApi = (props) => { 
    const [pokemon, setPokemon]=useState([]);

    const onClick = () => {

        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>response.json())
        .then(response=>{console.log(response);
            setPokemon(response.results)
        })
        .catch((error)=>console.log(error))
}
    return (
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            {
            pokemon?.map((personaje,index)=><p key={index} >{personaje.name}</p>)
        }
        </div>

    );
}
export default PokemonApi;