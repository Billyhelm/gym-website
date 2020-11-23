import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import './default.scss'
import Homepage from './pages/Homepage';
import Registration from './pages/Registration'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'

const initialState = {
  currentUser: null
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...initialState
    }
  }

  authListener = null

  handleLogin = ({user}) => {
    this.setState({currentUser: user})
  }

  handleLogout = props => {
    this.setState(initialState)
  }

  // componentDidMount(){
  //   this.autherListener 

  // }

  // componentWillUnmount(){
  //   this.authListerner()

  // }

  render(){

    
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={()=> (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}/>
          <Route path='/registration/' render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}/>
          <Route path='/login/' render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}/>
        </Switch>
      </div>
  );
}
}

export default App;


//currently 25:32 on video #4
// https://www.youtube.com/watch?v=QUDT0INBPvI&list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q&index=4