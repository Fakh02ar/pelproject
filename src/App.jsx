import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Catagories from './components/Catagories';
import Login from './components/Login';
import Signup from './components/Signup';
import Tabs from './components/Tabs';
import Applience from './components/Applience';
import Information from './components/Information';
import Footer from './components/Footer';

import Shop from './Pages/Shop';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Privacypolicy from './Pages/Privacypolicy';
import Terms from './Pages/Terms';
import Refund from './Pages/Refund';
import Forms from './components/Forms';

import { ThemeProvider } from './context/ThemeContext'; // ✅ correct path

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Catagories />
                <Tabs />
                <Applience />
                <Information />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Slider />
                <Catagories />
                <Tabs />
                <Applience />
                <Information />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<><Contact /><Forms /></>} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
