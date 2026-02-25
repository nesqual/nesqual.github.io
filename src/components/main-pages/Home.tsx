import { useMemo } from 'react'
import { getAllArticlesSorted } from '../../utils/useArticles'
import Speeches from '../misc/Speeches'
import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
    const latestArticle = useMemo(() => {
        const allArticles = getAllArticlesSorted()
        if (allArticles.length > 0) {
            return allArticles[0]
        } else {
            return null
        }
    }, [])

    return (
        <div id='home-page'>
            <Speeches version='' id='home-page-crawl' />

            <div id='highlighted-content-section'>
                <Link
                    to={'/'}
                    id='latest-article'
                    className='highlighted-content-item'
                >
                    <h2>Read the latest article!</h2>
                    <h3 className='latest-article-title'>
                        {latestArticle?.title}
                    </h3>
                    <img
                        src={latestArticle?.image}
                        className='latest-article-image'
                    ></img>
                </Link>
                <div id='other-articles' className='highlighted-content-item'>
                    Second
                </div>
                <div id='other-highlight' className='highlighted-content-item'>
                    Third
                </div>
            </div>
        </div>
    )
}

export default Home
