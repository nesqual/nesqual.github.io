import './Articles.scss'
import { useAllArticles } from '../../hooks/useArticles'
import { useNavigate } from 'react-router-dom'

function Articles() {
    const navigate = useNavigate()

    return (
        <div className='articles-page'>
            <h1>Articles Page</h1>
            <p>Articles content will be added here in the future.</p>
            <h3>Available Articles</h3>
            <ul className='articles-list'>
                {useAllArticles().map((article) => (
                    <li key={article.id}>
                        <button
                            onClick={() => {
                                console.log('hi')
                                navigate(`/articles/${article.id}`)
                            }}
                        >
                            <h4>{article.title}</h4>
                            <p>{article.date}</p>
                            <p>{article.summary}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Articles
