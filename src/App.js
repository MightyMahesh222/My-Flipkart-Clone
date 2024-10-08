import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Start from './Start'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Login from './LoginPage'
import MainPage from './MainPage'
import SignIn from './SignIn'
import NotFound  from './NotFound'
import Forget from './Forget'
import ProductItem from './ProductItem'
import './App.css';

function App() {
  return (
    <div className='app'>
       <BrowserRouter>
       <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path="/start" component={Start}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/forget' component={Forget}/>
        <Route exact path='/product/:id' component={ProductItem}/>
        <Route component={NotFound}/>
        </Switch>
       </BrowserRouter>
       </div>
  );
}

export default App;
