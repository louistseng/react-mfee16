import React from 'react'
import ProgressBar from './OrderList/ProgressBar'
import BasicTextFields from './OrderList/BasicTextFields'
import ProductOrder from './OrderList/ProductOrder'
import Other from './OrderList/Other'

function OrderList() {
  return (
    <>
      <ProgressBar />
      <br />
      <BasicTextFields />
      <br />
      <ProductOrder />
      <br />
      <Other />
    </>
  )
}
export default OrderList
