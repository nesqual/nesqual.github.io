// This file is auto-generated. Do not edit manually.
import type { JSX } from 'react'
import testArticle from '../components/articles/test-article'
import testArticle2 from '../components/articles/test-article copy'
import defaultImage from '../assets/images/stars.png'

export interface Article {
    id: string
    title: string
    summary: string
    image: string
    date: Date
    articleFunc: () => JSX.Element
    [key: string]: any
}

export const articleList: (() => JSX.Element)[] = [testArticle, testArticle2]

const getArticleIndex = () => {
    const index: { [id: string]: Article } = {}
    articleList.forEach((articleModule) => {
        // Get metadata saved in article
        const articleFunc = articleModule as (() => JSX.Element) & {
            meta: {
                title: string
                date: string
                summary: string
                image?: string
            }
        }
        const date = new Date(Date.parse(articleFunc.meta.date))
        const id = `${articleFunc.meta.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '')
            .replace(/^-+|-+$/g, '')}${date.toDateString()}`

        // Set cleaned attributes of the article for storage
        index[id] = {
            id,
            title: articleFunc.meta.title,
            summary: articleFunc.meta.summary,
            image: articleFunc.meta.image
                ? articleFunc.meta.image
                : defaultImage,
            date,
            articleFunc,
        }
    })
    return index
}

export const getArticle = (id: string): Article | undefined => {
    return getArticleIndex()[id]
}

export const getAllArticles = (): Article[] => {
    return Object.values(getArticleIndex())
}

export const getArticleIds = (): string[] => {
    return Object.keys(getArticleIndex())
}
