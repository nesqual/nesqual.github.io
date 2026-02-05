import { useEffect, useState } from 'react'
import { getArticle, getAllArticles } from '../generated/articleIndex'
import type { Article } from '../generated/articleIndex'

export const useArticle = (id: string) => {
    const [article, setArticle] = useState<Article | undefined>()

    useEffect(() => {
        setArticle(getArticle(id))
    }, [id])

    return article
}

export const useAllArticles = () => {
    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        setArticles(getAllArticles())
    }, [])

    return articles
}
