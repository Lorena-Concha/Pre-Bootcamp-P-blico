import React, { useState, useEffect } from 'react';
import { simpleGet } from '../actions/simpleGet';

const Home = () => {

    const [selected, setSelected] = useState();
    const [objetos, setObjetos] = useState();
    const [id, setId] = useState();
    const [objeto, setObjeto] = useState();

    const onChangeSelect = (e) => {
        setSelected(e.target.value)
    }

    const onClickId = (e) => {
        console.log("id: " + id);
        setObjeto(objetos[id]);
    }

    const onChangeInput = (e) => {
        setId(e.target.value)
    }

    useEffect(async () => {
        if (selected) {
            const response = await simpleGet("https://swapi.dev/api/" + selected);
            console.log(response);
            setObjetos(response.results);
        }
    }, [selected]);

    useEffect(async () => {
        if (id) {
            const response = await simpleGet("https://swapi.dev/api/" + selected);
            setId(response.results);
        }
    }, [selected]);


    return (
        <div>
            <select required onChange={onChangeSelect}>
                <option default>Selecciona una Opción</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="startships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            <div>
                <ul>

                    {objetos && objetos.map((objeto, i) => <li key={i}>{objeto.name}</li>)}
                </ul>
            </div>
            <label>Id:</label>
            <input type="search" id="id" name="id" onChange={onChangeInput}></input>
            <button onClick={onClickId}>ID</button>
            <div>
                <ul style={{ display: (selected === "people" ? 'block' : 'none') }}>

                    <li>{objeto?.name}</li>
                    <li>{objeto?.gender}</li>
                    <li>{objeto?.height}</li>
                    <li>{objeto?.skin_color}</li>
                    <li>{objeto?.eye_color}</li>
                    <li>{objeto?.species}</li>
                </ul>
                <ul style={{ display: (selected === "vehicles" ? 'block' : 'none') }}>
                    <li>{objeto?.name}</li>
                    <li>{objeto?.starships}</li>
                    <li>{objeto?.model}</li>
                    <li>{objeto?.manufacturer}</li>
                    <li>{objeto?.passengers}</li>
                    <li>{objeto?.classification}</li>
                </ul>
                <ul style={{ display: (selected === "species" ? 'block' : 'none') }}>
                    <li>{objeto?.name}</li>
                    <li>{objeto?.eye_colors}</li>
                    <li>{objeto?.language}</li>
                    <li>{objeto?.skin_colors}</li>
                </ul>
                <ul style={{ display: (selected === "planets" ? 'block' : 'none') }}>
                    <li>{objeto?.name}</li>
                    <li>{objeto?.designation}</li>
                    <li>{objeto?.climate}</li>
                    <li>{objeto?.diameter}</li>
                    <li>{objeto?.gravity}</li>
                    <li>{objeto?.population}</li>
                    <li>{objeto?.terrain}</li>
                </ul>
            </div>
        </div>

    );
}
export default Home;
