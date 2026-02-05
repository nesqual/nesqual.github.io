import fs from 'fs'
import path from 'path'

const articlesDir = path.join(process.cwd(), 'src/assets/articles')
const outputFile = path.join(process.cwd(), 'src/generated/articleIndex.ts')

// Ensure output directory exists
const outputDir = path.dirname(outputFile)
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
}

// Extract metadata from meta tag
function extractMetadata(fileContent: string): Record<string, string> {
    const metaMatch = fileContent.match(/<meta\s+([^>]*)>/i)
    if (!metaMatch) return {}

    const metaStr = metaMatch[1]
    const metadata: Record<string, string> = {}

    // Parse attributes from meta tag
    const attrRegex = /(\w+)="([^"]*)"/g
    let match
    while ((match = attrRegex.exec(metaStr)) !== null) {
        metadata[match[1]] = match[2]
    }

    if (metadata['date']) {
        // Ensure date is properly formatted
        metadata['date'] = metadata['date'].trim()
        const date = Date.parse(metadata['date'])
        if (!date) {
            throw new Error(
                `Invalid date format in article metadata: ${metadata['date']}. Use valid parseable format like 'January 1, 2024'.`,
            )
        }
    }

    return metadata
}

// Get all article files
const files = fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith('.html'))

// Generate import statements and index
let imports = ''
let indexEntries = ''

files.forEach((file, index) => {
    const name = path.basename(file, '.html')
    const camelCaseName = name
        .replace(/[^a-zA-Z0-9]+([a-z])/g, (_, char) => char.toUpperCase())
        .replace(/[^a-zA-Z0-9]/g, '')
    const importName = `Article_${camelCaseName}`

    const filePath = path.join(articlesDir, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const metadata = extractMetadata(fileContent)

    imports += `import ${importName} from '../assets/articles/${file}?raw'\n`

    const metadataStr = Object.entries(metadata)
        .map(
            ([key, value]) => `        ${key}: '${value.replace(/'/g, "\\'")}'`,
        )
        .join(',\n')

    indexEntries += `    '${name}': {\n        id: '${name}',\n        filename: '${file}',\n        content: ${importName},\n${metadataStr ? metadataStr + ',\n' : ''}    },\n`
})

const indexContent = `// This file is auto-generated. Do not edit manually.
${imports}
export interface Article {
    id: string
    filename: string
    content: string
    [key: string]: any
}

export const articleIndex: Record<string, Article> = {
${indexEntries}}

export const getArticle = (id: string): Article | undefined => {
    return articleIndex[id]
}

export const getAllArticles = (): Article[] => {
    return Object.values(articleIndex)
}

export const getArticleIds = (): string[] => {
    return Object.keys(articleIndex)
}
`

fs.writeFileSync(outputFile, indexContent)
console.log(`✓ Generated article index with ${files.length} articles`)
