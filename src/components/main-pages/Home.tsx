import Speeches from '../misc/Speeches'
import './Home.scss'

function Home() {
    return (
        <div className='home'>
            <h1>Home</h1>
            <Speeches version='maarva' />
        </div>
    )
}

export default Home
