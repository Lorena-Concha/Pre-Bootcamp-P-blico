import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';

export default () => {
    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm></ProductForm>
        </div>
    )
}


