import React from 'react';
 
import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
 
import { HomePage } from './pages/homepage/homepage.component';
import Shop from './pages/shop/Shop';
import Header from './components/header/header';


function App() {
  return (
 <div>
   <BrowserRouter >
  
   <Header/>
 <Routes>
   <Route exact path ="/" element ={<HomePage></HomePage>}/>
   <Route path="/shop" element={<Shop/>}/>
 </Routes>
 </BrowserRouter>
 </div>
 
  );
}

export default App;
