import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../actions/simpleGet';

const Character = () => {
    const params = useParams();
    const [objetos, setObjetos] = useState();


    useEffect(async () => {
        
            const response = await simpleGet("https://swapi.dev/api/people/" + params.id);
            console.log(response);
            setObjetos(response);
        
    }, []);

    return (
        <div>
            {objetos?.name}
        </div>
    );
}

export default Character;
