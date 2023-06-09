import React, {useEffect, useState} from 'react';
import { Product } from "./components/Product";
import axios from "axios";
import {IProduct} from "./models";

function App() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProducts(response.data)
    }
    fetchProducts()
  }, [])


  return (
    <div className='container mx-auto max-w-2xl pt-5'>
        { products.map(product => (
            <Product product={product} key={product.id}/>
            55:16
        ))}
    </div>
  );
}

export default App;
