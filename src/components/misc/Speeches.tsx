import { useEffect, useState } from 'react'
import './Speeches.scss'
import classNames from 'classnames'

export default function Speeches({ version = '' }: { version: string }) {
    const [currentVersion, setCurrentVersion] = useState('')

    useEffect(() => {
        if (version !== 'nemik' && version !== 'maarva') {
            setCurrentVersion(
                Math.floor(Math.random() * 2) === 0 ? 'nemik' : 'maarva',
            )
        } else {
            setCurrentVersion(version)
        }
    }, [version])

    const renderSpeech = (speech: string) => {
        if (speech === 'nemik') {
            return (
                <>
                    <h2>Nemik's Manifesto</h2>
                    <p>
                        There will be times when the struggle seems impossible.
                        I know this already. Alone, unsure, dwarfed by the scale
                        of the enemy.
                    </p>

                    <p>
                        Remember this, Freedom is a pure idea. It occurs
                        spontaneously and without instruction. Random acts of
                        insurrection are occurring constantly throughout the
                        galaxy. There are whole armies, battalions that have no
                        idea that they&#39;ve already enlisted in the cause.
                    </p>

                    <p>
                        Remember that the frontier of the Rebellion is
                        everywhere. And even the smallest act of insurrection
                        pushes our lines forward.
                    </p>

                    <p>
                        And remember this: the Imperial need for control is so
                        desperate because it is so unnatural. Tyranny requires
                        constant effort. It breaks, it leaks. Authority is
                        brittle. Oppression is the mask of fear.
                    </p>

                    <p>
                        Remember that. And know this, the day will come when all
                        these skirmishes and battles, these moments of defiance
                        will have flooded the banks of the Empires&#39;s
                        authority and then there will be one too many. One
                        single thing will break the siege.
                    </p>
                </>
            )
        } else {
            return (
                <>
                    <h2>Maarva's Speech</h2>
                    <p>
                        My name is Maarva Carrassi Andor. I'm honored to stand
                        before you. I'm honored to be a Daughter of Ferrix, and
                        honored to be worthy of the stone.
                    </p>

                    <p>
                        Strange, I... feel as if I can see it. I was six, I
                        think, first time I touched a funerary stone. Heard our
                        music, felt our history, holding my sisters hand as we
                        walked all the way from Fountain Square. Where you stand
                        now, I've been more times than I can remember.
                    </p>

                    <p>
                        I always wanted to be lifted. I was always eager, always
                        waiting to be inspired. I remember every time it
                        happened, every time the dead lifted me... with their
                        truth. And now I'm dead, and I yearn to lift you. Not
                        because I want to shine or even be remembered. It's
                        because I want you to go on. I want Ferric to continue.
                        In my waining hours, thats what comforts me most.
                    </p>

                    <p>
                        But I fear for you. We've been sleeping. We've had each
                        other, and Ferrix, our work, our days. We had each other
                        and they left us alone. We kept the trade lane open, and
                        they left us alone. We took their money and ignored
                        them, we kept their engine churning, and the moment they
                        pulled away, we forgot them. Because we had each other.
                        We had Ferrix. But we were sleeping. I've been sleeping.
                        And I've been turning away from the truth I wanted not
                        to face.
                    </p>

                    <p>
                        There is a wound that won't heal at the center of the
                        galaxy. There is a darkness reaching like rust into
                        everything around us. We let it grow, and now it's here.
                        It's here and it's not visiting anymore. It wants to
                        stay.
                    </p>

                    <p>
                        The Empire is a disease that thrives in darkness, it is
                        never more alive than when we asleep. It's easy for the
                        dead to tell you to fight, and maybe it's true, maybe
                        fighting is useless. Perhaps it's too late. But I'll
                        tell you this, if I could do it again, I'd wake up early
                        and be fighting those bastards from the start! Fight the
                        Empire!
                    </p>
                </>
            )
        }
    }

    return (
        <div className='speeches-container'>
            <div
                className={classNames('speech', {
                    nemik: currentVersion === 'nemik',
                    maarva: currentVersion === 'maarva',
                })}
            >
                {renderSpeech(currentVersion)}
            </div>
            <div className='stars'></div>
        </div>
    )
}
