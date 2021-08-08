import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '金色 T-shirt',
    catgory: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 1200,
  },
]

function About(props) {
  console.log(props)

  const [product, setProduct] = useState({
    id: 0,
    name: '',
    catgory: '',
    image: '',
    price: 0,
  })
  useEffect(() => {
    const productId = +props.match.params.id
    const product = products.find((v, i) => {
      return v.id === productId
    })
    if (product) setProduct(product)
  }, [])
  return (
    <>
      <h1>Login:</h1>
      <h3>目前登入狀況：{props.auth ? '登入中' : '請登入'}</h3>
      <h1>About</h1>
      <img src={product.image} alt="" />
      <h5>{product.name}</h5>
    </>
  )
}

export default withRouter(About)
