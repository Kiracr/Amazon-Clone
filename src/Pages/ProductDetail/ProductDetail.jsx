import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'
import axios from 'axios'
import { ProductUrl } from '../../Api/EndPoints'
import Layout from '../../Components/Layout/Layout'
import Loader from '../../Components/Loader/Loader'


function ProductDetail() {

  const {productId} = useParams()
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${ProductUrl}/products/${productId}`)
    .then((res) => {
      setProduct(res.data)
      setIsLoading(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
    }
  )
  }, [])

  return (
    
    <Layout>
      {isLoading? (<Loader />) : product ? (<ProductCard product={product}  flex={true}
          add_description={true}
          add_button={true}/>) : (null)}
    </Layout>  

    
  )
}

export default ProductDetail