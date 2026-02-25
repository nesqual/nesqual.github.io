import './About.scss'
import NesqualStarbird from '../../assets/images/Nesqual_Starbird_2-plain-no-background.svg'

function About() {
    return (
        <div id='about-page'>
            <h2 className='about-title'>Nesqual is a project by Nesqual.</h2>
            <img className='nesqual-starbird' src={NesqualStarbird} />
        </div>
    )
}

export default About
