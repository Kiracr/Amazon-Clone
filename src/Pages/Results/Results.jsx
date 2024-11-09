import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'
import {ProductUrl} from '../../Api/EndPoints'
import './Results.css'
import Loader from '../../Components/Loader/Loader'



function Results() {
  const {categoryName} = useParams()
  const [results, setResults] = useState()
const [isLoading, setIsLoading] = useState(false)
 useEffect(() => {
  setIsLoading(true)
  axios.get(`${ProductUrl}/products/category/${categoryName}`)
  .then((res) => {
    
    setResults(res.data)
    setIsLoading(false)
  }).catch((err) => {
    console.log(err)
    setIsLoading(false)
  })
 }, [])
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Catagory / {categoryName}</p>
          <hr />

          <dir className="results_container">
            {results?.map((data) => (
              <ProductCard 
              key={data.id} 
              product={data} 
              // add_description={true}
              add_button={true}/>
            ))}
            {/* {console.log(results)} */}
          </dir>
        </section>
      )}
    </Layout>
  )
}

export default Results