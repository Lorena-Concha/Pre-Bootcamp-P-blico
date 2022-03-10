import React, { useState, useEffect } from 'react';
import PrintBox from './printbox';


const Boxgenerator= props => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);

    const creaBox = () => {
        setBoxes([...boxes,color])
    }

    useEffect(() => {
    console.log(boxes);
    }, [boxes]);

    return( <div>
        <div className='barra'>
            <label>Agrega un Color:</label>
            <input type="color" name="color" className='name' placeholder='ingresa el nombre de color' onChange={ (e) => setColor(e.target.value)}/>
        </div>
            <button onClick={creaBox} className='barra' >Add</button>
            <div className='cajas'>
                {boxes.map((caja) => <PrintBox color={caja}></PrintBox>)}
                </div>
            </div>
            
);
}
    
export default Boxgenerator;
