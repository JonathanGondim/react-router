import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import Footer from './components/Footer'

function App() {
  return (

    <div className='App'>

    <Header/>

    <BrowserRouter>

      

       <div className='content'>


<Routes>
<Route path="/" element={<Produtos />} />
<Route path="Contato" element={<Contato />} />

</Routes>


       </div>


     
    </BrowserRouter>

      <Footer/>

    </div>
  );
}

export default App;
