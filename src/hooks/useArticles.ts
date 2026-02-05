import { getArticle, getAllArticles } from '../generated/articleIndex'
import type { Article } from '../generated/articleIndex'

/** Return a single article by id. */
export const getArticleById = (id: string): Article | undefined =>
    getArticle(id)

/** Return the sorted list of all articles. */
export const getAllArticlesSorted = (): Article[] =>
    getAllArticles().sort((a, b) => Date.parse(b.date) - Date.parse(a.date))

/** Return the article that comes before the one with the given id. */
export const getPreviousArticle = (
    id: string,
    allArticles: Article[] = getAllArticlesSorted(),
): Article | undefined => {
    const idx = allArticles.findIndex((a) => a.id === id)
    return idx > 0 ? allArticles[idx - 1] : undefined
}

/** Return the article that comes after the one with the given id. */
export const getNextArticle = (
    id: string,
    allArticles: Article[] = getAllArticlesSorted(),
): Article | undefined => {
    const idx = allArticles.findIndex((a) => a.id === id)
    return idx >= 0 && idx < allArticles.length - 1
        ? allArticles[idx + 1]
        : undefined
}

/** Boolean helpers – no state needed. */
export const hasPreviousArticle = (id: string): boolean => {
    const idx = getAllArticlesSorted().findIndex((a) => a.id === id)
    return idx > 0
}

export const hasNextArticle = (id: string): boolean => {
    const idx = getAllArticlesSorted().findIndex((a) => a.id === id)
    return idx >= 0 && idx < getAllArticlesSorted().length - 1
}
