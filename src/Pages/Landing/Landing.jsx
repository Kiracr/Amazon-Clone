import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel1 from '../../Components/Carousel/Carousel1'
import Catagory from '../../Components/Catagory/Catagory'
import Product from '../../Components/Product/Product'

function Landing() {
  return (
    <Layout>

    <Carousel1 />
    <Catagory />
    <Product />

    </Layout>
  )
}

export default Landing