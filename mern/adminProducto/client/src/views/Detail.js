import React, {useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})

    const {id} = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+ id)
        .then(res => setProduct({
            ...res.data
        }))
    },[])

    return (
        <div>
            <h1>Destalle de Producto</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Fecha de Ingreso: {product.createdAt}</p>
            <div >
            <button className="btn btn-primary"  onClick={()=>history.push("/")}>Volver</button>
            </div>
        </div>
    )

}