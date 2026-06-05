import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Index';
import Homepage from './Pages/Homepage/Index'
import ScrollToTop from './Scrolltotop';
function App() {
  return (
   
    <BrowserRouter>
     <ScrollToTop />
    <Layout>
      <Homepage/>
      </Layout>
    </BrowserRouter>
  
  );
}

export default App;