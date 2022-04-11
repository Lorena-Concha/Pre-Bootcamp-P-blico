import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


const onSubmitProduct = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product/new', {
        title,price,description
    })
    .then(res=> {
        console.log(res)
        history.go(0)
    })
    .catch(err=>console.log(err))
}

return (
    <form onSubmit={onSubmitProduct}>
        <div className="form-group d-flex flex-column align-items-center">
        <p>
            <label>Title</label>
            <input className="form-control" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </p>
        <p>
            <label>Price :  $ </label>
            <input className="form-control" type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
        </p>
        <p>
            <label>Description :</label>
            <input className="form-control" type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
        </p>
        <p>
            <input className="btn btn-primary" type="submit"></input>
        </p>
        </div>


    </form>
)
}
