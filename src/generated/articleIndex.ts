// This file is auto-generated. Do not edit manually.
import Article_testArticleCopy from '../assets/articles/test-article copy.html?raw'
import Article_testArticle from '../assets/articles/test-article.html?raw'

export interface Article {
    id: string
    filename: string
    content: string
    [key: string]: any
}

export const articleIndex: Record<string, Article> = {
    'test-article copy': {
        id: 'test-article copy',
        filename: 'test-article copy.html',
        content: Article_testArticleCopy,
        title: 'Sample Fake Article',
        date: 'February 5, 2026',
        summary: 'An example article for testing.',
    },
    'test-article': {
        id: 'test-article',
        filename: 'test-article.html',
        content: Article_testArticle,
        title: 'Test article #1',
        date: 'January 1, 2026',
        summary: 'A brief summary of the test article.',
    },
}

export const getArticle = (id: string): Article | undefined => {
    return articleIndex[id]
}

export const getAllArticles = (): Article[] => {
    return Object.values(articleIndex)
}

export const getArticleIds = (): string[] => {
    return Object.keys(articleIndex)
}
