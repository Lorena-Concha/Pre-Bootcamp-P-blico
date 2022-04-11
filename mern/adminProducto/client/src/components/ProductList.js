import React from "react";
import { Link } from "react-router-dom";

export default props => {
    return(
        <div>
            {props.product.map((product,index)=>{
                return <p key={index}>
                    <Link className='Link' to={"product/"+product._id}> Detalle {product.titulo}</Link>
                    {product.title}, {product.price}, {product.description}
                    </p>
                    

            })}
        </div>
    )
}