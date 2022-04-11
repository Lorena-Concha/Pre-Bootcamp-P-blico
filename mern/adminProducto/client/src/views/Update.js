import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

export default props => {
    const { id } = useParams();
    const history = useHistory();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, { title, price, description })
            .then(res => console.log(res));
    }

    return (
        <form onSubmit={updateProduct}>
            <div className="form-group d-flex flex-column align-items-center">
                <h1>Actualice Producto</h1>
                <p>
                    <label>Title</label>
                    <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price :  $ </label>
                    <input className="form-control" type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description :</label>
                    <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <p>
                    <div className="btn-toolbar">
                        <div className="p-3">
                            <input className="btn btn-primary " type="submit"></input>

                        </div>
                        <div className="p-3">

                            <button className="btn btn-primary " onClick={() => history.push("/")}>Volver</button>
                        </div>
                    </div>
                </p>
            </div>


        </form>
    )
}
