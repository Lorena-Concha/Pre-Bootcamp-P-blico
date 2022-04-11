import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
    }
    return(
        <div>
            {props.product.map((product,index)=>{
                return <p key={index}>
                    <Link className='Link' to={"product/"+product._id}> Detalle {product.titulo}</Link>
                    {product.title}, {product.price}, {product.description}
                    <Link className='Link' to={"product/"+product._id+"/actualizar"}> Actualizar{product.titulo}</Link>
                    <button className="btn btn-primary" onClick={(e)=>{deleteProduct(product._id)}}>
                        Eliminar
                    </button>
                    </p>
                    



            })}
        </div>
    )
}