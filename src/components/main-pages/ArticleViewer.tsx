import { useNavigate, useParams } from 'react-router-dom'
import {
    hasPreviousArticle,
    hasNextArticle,
    getNextArticle,
    getPreviousArticle,
    getArticleById,
} from '../../utils/useArticles'
import './ArticleViewer.scss'

function renderArticle(id: string) {
    // Placeholder function to render article by ID
    return <div>{getArticleById(id)?.articleFunc?.()}</div>
}

function ArticleViewer() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    return (
        <div className='article-viewer'>
            <div className='article-paginator'>
                <button
                    disabled={!hasPreviousArticle(id ? id : 'unknown')}
                    onClick={() =>
                        navigate(
                            `/articles/${id ? getPreviousArticle(id)?.id : 'unknown'}`,
                        )
                    }
                >
                    Previous
                </button>
                <button
                    disabled={!hasNextArticle(id ? id : 'unknown')}
                    onClick={() =>
                        navigate(
                            `/articles/${id ? getNextArticle(id)?.id : 'unknown'}`,
                        )
                    }
                >
                    Next
                </button>
            </div>
            {renderArticle(id ? id : 'unknown')}
        </div>
    )
}

export default ArticleViewer
