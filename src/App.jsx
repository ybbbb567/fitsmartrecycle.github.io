import '~antd/dist/antd.js';
import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Waste from './pages/Waste';
import Rubbish from './pages/Rubbish';
import ResetPassword from './pages/ResetPassword';

function App () {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<Article />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/rubbish" element={<Rubbish />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
