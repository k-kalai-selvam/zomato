import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  {Header } from './components/header/Header';
import {Home} from './components/home/Home';
import {Cart} from './components/cart/Cart';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>

  <BrowserRouter>
  <Header/>
  <div className='container'>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    
     </div>
     <Footer/>
  </BrowserRouter>
      
      </>
  );
}

export default App;
