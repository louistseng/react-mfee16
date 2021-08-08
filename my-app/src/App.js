import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 以下要導入所需要頁面
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import OrderList from './pages/OrderList'
import Cart from './pages/Shppingcart/Cart'

// 路由器所在的位置，記錄所有的路由
// 全域狀態放在這裡
function App() {
  const [auth, setAuth] = useState(false)
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/order">OrderList</Link>
        <Link to="/cart">Cart</Link>

        {/* 以下是路由表 */}
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/order">
            <OrderList />
          </Route>
          <Route path="/login">
            <Login setAuth={setAuth} auth={auth} />
          </Route>
          <Route path="/about/:id?">
            <About auth={auth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
