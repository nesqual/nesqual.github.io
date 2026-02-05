const testArticle2 = () => {
    return (
        <article>
            <h1>Sample Fake Article</h1>
            <p>
                This is a placeholder article used to test the rendering of
                content.
            </p>
            <p>It contains several paragraphs to simulate real content.</p>
            <p>Feel free to modify or replace this text with actual data.</p>
            <p>End of the sample article.</p>
        </article>
    )
}

testArticle2.meta = {
    title: 'Sample Fake Article',
    date: 'February 5, 2026',
    summary: 'An example article for testing.',
}

export default testArticle2
