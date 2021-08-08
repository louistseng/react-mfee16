import React from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
  return (
    <>
      <h1>Login</h1>
      <h3>目前登入狀態：{props.auth ? '登入中' : '沒登入'}</h3>
      <button
        onClick={() => {
          props.setAuth(true)
          props.history.push('/')
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          props.setAuth(false)
        }}
      >
        登出
      </button>
      <button
        onClick={() => {
          props.history.goBack()
        }}
      >
        回到上一頁
      </button>
    </>
  )
}

export default withRouter(Login)
