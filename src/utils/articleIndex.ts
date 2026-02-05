// This file is auto-generated. Do not edit manually.
import type { JSX } from 'react'
import testArticle from '../components/articles/test-article'
import testArticle2 from '../components/articles/test-article copy'

export interface Article {
    id: string
    title: string
    summary: string
    date: Date
    articleFunc: () => JSX.Element
    [key: string]: any
}

export const articleList: (() => JSX.Element)[] = [testArticle, testArticle2]

const getArticleIndex = () => {
    const index: { [id: string]: Article } = {}
    articleList.forEach((articleModule) => {
        const articleFunc = articleModule as (() => JSX.Element) & {
            meta: { title: string; date: string; summary: string }
        }
        const date = new Date(Date.parse(articleFunc.meta.date))
        const id = `${articleFunc.meta.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '')
            .replace(/^-+|-+$/g, '')}${date.toDateString()}`
        index[id] = {
            id,
            title: articleFunc.meta.title,
            summary: articleFunc.meta.summary,
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
