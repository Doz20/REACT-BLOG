import './App.css';
import React,{Component} from 'react';
import LogIn from './LogIn/LogIn';
import{
  // CreateBrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
}from 'react-router-dom'
import ForgetPass from './LogIn/ForgetPass';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './LogIn/SignIn';
import Details from './pages/Details';
import Contact from './pages/Contact';
import { DetailsLoader } from './pages/Details';
import About from './homePage/About';
import { cardsLoader } from './component/CardContaint';
import Error from './component/Error';
// import Header from './homePage/Header';

class App extends Component{

  render(){
    const router= createBrowserRouter(
      createRoutesFromElements(
        // <Route path='/' element={<LogIn/>}>
<Route>
        <Route path='/' element={<LogIn/>} />
        <Route path='/forget' element={<ForgetPass/>} />
        <Route path='/home' element={<Home/>} loader={cardsLoader} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/details/:id' element={<Details/>} loader={DetailsLoader}/> */}
        {/* <Route path='/details' element={<Details/>} loader={DetailsLoader}/> */}


        <Route 
          path="/details/:id" 
          element={<Details />}
          errorElement={<Error/>}
          loader={DetailsLoader}
        />



        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>} />
 </Route>
      )
  
    )
  return (
    <div className="App">
<RouterProvider router={router}/> 
    </div>
  )}
}

export default App;
