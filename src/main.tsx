import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './Home.tsx';
import About from './components/About.tsx';
import NesqualStarbird from './assets/images/Nesqual_Starbird_no-background.svg?react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <nav className='global-nav-header'>
        <NesqualStarbird id='nav-logo' width={50} height={50} />
        <ul className='global-nav-list'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/articles'>Articles</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
