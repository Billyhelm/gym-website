import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './default.scss'
import Homepage from './pages/Homepage';
import Registration from './pages/Registration'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'
import Products from './pages/Products'
import ProductsLayout from './layouts/ProductsLayout'
import ProductShow from './pages/ProductShow'
import Profile from './pages/Profile'
import NewProduct from './pages/NewProduct'
import Checkout from './pages/Checkout'
import EditProduct from './pages/EditProduct'
import Orders from './pages/Orders'
import Admin from './pages/Admin'


const initialState = {
  currentUser: null,
  cart: [], 
  total: 0.0,
  refresh: true
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...initialState
    }
  }

  authListener = null

  handleDelete = (id, price) => {
    this.setState({cart: this.state.cart.filter(product => product.id !== id), 
      total: (this.state.total-price)
    })
  }

  submitOrder = () => {
    console.log("submitting order")

  }

  handleRefresh = () => {
    // console.log("trying to refresh", this.state.refresh)
    this.setState({refresh: !this.state.refresh})
    console.log(this.state.refresh)
  }

 handleLogin = (user) => {

    this.setState({currentUser: user})
    // console.log("this is my state", this.state)
  }

  handleLogout = () => {
    this.setState(initialState)
    localStorage.clear()
  }

  addToCart = (product, size) => {
    product.size = size
    this.setState({cart: [...this.state.cart, product]})
    let total = this.state.total + product.price
    this.setState({total: total})
  }

  render(){
    const {currentUser, total, cart} = this.state
    // console.log('This is my user', localStorage.id, localStorage.name, localStorage.status)
    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=> (
            <HomepageLayout currentUser={currentUser} handleLogout={this.handleLogout}>
              <Homepage />
            </HomepageLayout>
          )}/>
          <Route path='/registration/' 
          render={() => localStorage.id ? <Redirect to='/'/> : (
            <MainLayout handleLogout={this.handleLogout}>
              <Registration handleLogin={this.handleLogin}/>
            </MainLayout>
          )}/>
          <Route path='/login/' 
          render={() => localStorage.id ? <Redirect to='/'/> : (
            <MainLayout currentUser={currentUser} handleLogout={this.handleLogout}>
              <Login handleLogin={this.handleLogin}/>
            </MainLayout>
          )}/>
          {/* <Route path='/profile/' 
          render={() =>  !localStorage.id ? <Redirect to='/' /> : (
            <MainLayout currentUser={currentUser} handleLogout={this.handleLogout}>
              <Profile currentUser={currentUser} handleLogin={this.handleLogin}/>
            </MainLayout>
          )}/> */}
          <Route exact path='/products/'  render={(props) => (
              <ProductsLayout currentUser={currentUser} handleLogout={this.handleLogout}>
                <Products props={props}/>
              </ProductsLayout>
          )}/>
          <Route exact path='/newproduct/'  render={(props) =>  localStorage.status !== 'admin' ? <Redirect to='/' /> : (
              <ProductsLayout handleLogout={this.handleLogout}>
                <NewProduct props={props}/>
              </ProductsLayout>
          )}/>
          <Route exact path='/products/:id'  render={(props) => (
            <ProductsLayout handleLogout={this.handleLogout}>
              <ProductShow currentUser={currentUser} props={props} cart={cart} addToCart={this.addToCart} total={total} handleRefresh={this.handleRefresh}/>
            </ProductsLayout>
        )}
          />
          <Route path='/products/:id/edit'  render={(props) => (
            <ProductsLayout handleLogout={this.handleLogout}>
              <EditProduct currentUser={currentUser} props={props}/>
            </ProductsLayout>
        )}
          />
          <Route exact path='/checkout/'  render={(props) =>  !localStorage.id ? <Redirect to='/' /> : (
              <ProductsLayout handleLogout={this.handleLogout}>
                <Checkout props={props} cart={cart} total={total} handleDelete={this.handleDelete} submitOrder={this.submitOrder}/>
              </ProductsLayout>
          )}/>
          <Route exact path='/orders/'  render={(props) => (
              <ProductsLayout currentUser={currentUser} handleLogout={this.handleLogout}>
                <Orders props={props}/>
              </ProductsLayout>
          )}/>
          <Route exact path='/admin/'  render={(props) => (
              <ProductsLayout currentUser={currentUser} handleLogout={this.handleLogout}>
                <Admin props={props}/>
              </ProductsLayout>
          )}/>
        </Switch>
      </div>
  );
}
}

export default App;




//currently 25:32 on video #4
// https://www.youtube.com/watch?v=QUDT0INBPvI&list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q&index=4