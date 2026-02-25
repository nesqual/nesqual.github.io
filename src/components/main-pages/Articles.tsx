import './Articles.scss'
import { getAllArticlesSorted } from '../../utils/useArticles'
import { useNavigate } from 'react-router-dom'

function Articles() {
    const navigate = useNavigate()

    return (
        <div className='articles-page'>
            <p>Articles content will be added here in the future.</p>
            <h3>Available Articles</h3>
            <ul className='articles-list'>
                {getAllArticlesSorted().map((article) => (
                    <li key={article.id}>
                        <button
                            onClick={() => {
                                navigate(`/articles/${article.id}`)
                            }}
                        >
                            <h4>{article.title}</h4>
                            <p>{article.date.toLocaleDateString()}</p>
                            <p>{article.summary}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Articles
