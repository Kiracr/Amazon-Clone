import React, {useContext}from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import './cart.css'
import {Link} from 'react-router-dom'
import { Type } from '../../Utility/action.type'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

function Cart() {

  const [{basket},dispatch] = useContext(DataContext)
  const total = basket?.reduce((acc, item) => {
    return item.price * item.amount + acc
  },0)

  const incri = (item) => {
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }

  const decri = (id) => {
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <Layout>
    <section className="cart_container">
        <div className="cart_inner" >
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No items in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className="cart_product">
                  <ProductCard
                    key={item?.id}
                    product={item}
                    flex={true}
                    add_description={true}
                    add_button={false}
                  />
                  <div className="car_btn_container">
                    <button onClick={() => incri(item)}> 
                    <IoIosArrowUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button onClick={() => decri(item.id)}>
                    <IoIosArrowDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="cart_subtotal">
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This Order Contains a Gift</small>
            </span>
            <Link to={"/payment"}>Continue to CheckOut</Link>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Cart
