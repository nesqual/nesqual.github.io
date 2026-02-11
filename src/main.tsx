import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './index.scss'
import './global-nav.scss'
import Home from './components/main-pages/Home.tsx'
import About from './components/main-pages/About.tsx'
import NesqualStarbird from './assets/images/Nesqual_Starbird_2-plain-no-background.svg'
import Articles from './components/main-pages/Articles.tsx'
import ArticleViewer from './components/main-pages/ArticleViewer.tsx'

export default function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <div id='global-container'>
                    <nav className='global-nav-header'>
                        <img
                            id='nav-logo'
                            width={50}
                            height={50}
                            src={NesqualStarbird}
                            title={'Fight the Empire!'}
                        />
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
                        <div className='global-nav-right'>
                            <Link id='global-nav-right-text' to='/'>
                                Nesqual
                            </Link>
                        </div>
                    </nav>
                    <div id='global-content-window'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/articles' element={<Articles />} />
                            <Route path='/about' element={<About />} />
                            <Route
                                path='/articles/:id'
                                element={<ArticleViewer />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </StrictMode>
    )
}

createRoot(document.getElementById('root')!).render(<App />)
