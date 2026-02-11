import Speeches from '../misc/Speeches'
import './Home.scss'

function Home() {
    return (
        <div className='home'>
            <h1>Nesqual</h1>
            <h2>By Nesqual</h2>
            <Speeches version='random' />
        </div>
    )
}

export default Home
