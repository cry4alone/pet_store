import {React } from 'react'
import { useParams } from 'react-router'

const products = {
    1: {name: "Собачий корм", description: "desc 1", price: "1"},
    2: {name: "Мячик", description: "desc 2", price: "2"},
    3: {name: "Стол", description: "desc 3", price: "3"},
}

const Product = () => {
    const { id } = useParams();
    const product = products[id];
    
    if (!product) return <h1>Product not found</h1>
  return (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
    </div>
  )
}

export default Product