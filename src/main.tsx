import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
    BrowserRouter,
    Link,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom'
import './index.scss'
import './global-nav.scss'
import Home from './components/main-pages/Home.tsx'
import About from './components/main-pages/About.tsx'
import NesqualStarbird from './assets/images/Nesqual_Starbird_2-plain-no-background.svg'
import Articles from './components/main-pages/Articles.tsx'
import ArticleViewer from './components/main-pages/ArticleViewer.tsx'

export default function App() {
    const location = useLocation()
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        const path = location.pathname
        const articlesRegex = /^\/articles(\/.*)?$/
        if (path === '/') {
            setCurrentPage('Home')
        } else if (articlesRegex.test(path)) {
            setCurrentPage('Articles')
        } else if (path === '/about') {
            setCurrentPage('About')
        } else {
            setCurrentPage('')
        }
    })

    return (
        <div id='global-container'>
            <nav className='global-nav-header'>
                <Link id='nav-logo-wrapper' to='/'>
                    <img
                        id='nav-logo'
                        width={50}
                        height={50}
                        src={NesqualStarbird}
                        title={'Fight the Empire!'}
                    />
                </Link>
                <ul className='global-nav-list'>
                    <li>
                        <Link
                            to='/'
                            className={currentPage === 'Home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/articles'
                            className={
                                currentPage === 'Articles' ? 'active' : ''
                            }
                        >
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/about'
                            className={currentPage === 'About' ? 'active' : ''}
                        >
                            About
                        </Link>
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
                    <Route path='/articles/:id' element={<ArticleViewer />} />
                </Routes>
            </div>
        </div>
    )
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
