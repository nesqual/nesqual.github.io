import { useParams } from 'react-router-dom'
import { useArticle } from '../../hooks/useArticles'
import DOMPurify from 'dompurify'
import './ArticleViewer.scss'

function renderArticle(id: string) {
    const sanitizedArticleHtml = DOMPurify.sanitize(
        useArticle(id)?.content || '',
    )

    // Placeholder function to render article by ID
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: sanitizedArticleHtml,
            }}
        ></div>
    )
}

function ArticleViewer() {
    const { id } = useParams<{ id: string }>()

    return (
        <div className='article-viewer'>
            <div className='article-paginator'>
                <button>Previous</button>
                <button>Next</button>
            </div>
            {renderArticle(id ? id : 'unknown')}
        </div>
    )
}

export default ArticleViewer
