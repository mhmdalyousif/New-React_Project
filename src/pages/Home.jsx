import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products.JSX'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const [products , setproducts] = useState([]);

  const data = useLoaderData()
  useEffect(()=>{
    setproducts(data.data)
  },[data])
 
  return (
    <div>
      <Banner/>
      <Products products= {products} />
    </div>
  )
}

export default Home
