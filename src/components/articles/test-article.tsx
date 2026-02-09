import starbird from '../../assets/images/Nesqual_Starbird_2-plain-no-background.svg'
import './test-article.scss'

const testArticle = () => {
    return (
        <article className='test-article-1'>
            <h1>Test Article</h1>
            <p>This is a test article to verify recent changes.</p>
            <br />
            <p>It contains some sample content for testing purposes.</p>
            <p>This is a sample text</p>
            <br />
            <p>Here is an image</p>
            <img src={starbird} alt='Sample Image' />
            <p>End of the test article.</p>
        </article>
    )
}

testArticle.meta = {
    title: 'Test article #1',
    date: 'January 1, 2026',
    summary: 'A brief summary of the test article.',
}

export default testArticle
