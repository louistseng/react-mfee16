import React from 'react'

function Home(props) {
  return (
    <>
      <h1>Login:</h1>
      <h3>目前登入狀況：{props.auth ? '登入中' : '請登入'}</h3>
      <h1>home</h1>
    </>
  )
}

export default Home
