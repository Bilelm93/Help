
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { CurrentUser } from './REDUX/actions/userAction';
import { getType } from './REDUX/actions/TypeAction';

import Footer from './components/NavBar/Footer'
import  Type from "./components/pages/PagesType/Type";
import AppNavBar from './components/NavBar/AppNavBar';
import Landpage from './components/pages/Landpage'
import Panel from './components/Admin/Panel';
import userProfile from './components/pages/Profile/UserProfile'
import Register from './components/user/Register'
import login from './components/user/Login'
import Subdelet from './components/pages/Profile/subvention/Subdelet';

import './App.css'



function App() {

  const dispatch = useDispatch();





  useEffect(() => {
    dispatch(CurrentUser())
    dispatch(getType())
  
  }, []);

  

  return (
    <BrowserRouter>
      <AppNavBar />
      <Switch>
      <PrivateRoute exact path='/Panel' component={Panel}/>
      <Route exact path='/' component={Landpage}></Route>
      <PrivateRoute path='/userprofile' component={userProfile}/>
      <Route path='/Type/:id' component={Type}></Route>
      <Route path="/Register" component={Register}></Route>
      <Route path="/login" component={login} ></Route>
      <Route path='/deletsub/:id' component={Subdelet}></Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}                  

export default App;