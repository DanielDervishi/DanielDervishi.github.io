import React from 'react'

const HangmanPopout = () => {
    return (<div className='popoutBody'>
        <h2 className='modalBodyTitle'>Motivation</h2>
        <ul>
            <li>After finishing my first IOS programming class, I wanted to build something fun that I could play with my friends using my newly acquired skills and fell upon hangman. After creating the app, my friends and I played whenever we had spare time in a class!
            </li>
        </ul>

        <h2 className='modalBodyTitle'>Demo</h2>
        <div className='popoutVideo'>
            <video controls autoPlay>
                <source src={process.env.PUBLIC_URL + 'Videos/Hangman.mp4'} type="video/mp4" />
            </video>
        </div>
        <h2 className='modalBodyTitle'>What I did (For Recruiters ー( ´ ▽ ` )ﾉ)</h2>
        <ul>
            <li>
                Implemented almost the entirety of the game using Swift, UIkit and AVFoundation
            </li>
        </ul>

        <h2 className='modalBodyTitle'>Some Features</h2>
        <ul>
            <li>
                Animations
            </li>
            <li>
                Multiple game modes (using auto-generated vs custom words with hints)
            </li>
        </ul>
    </div>)
}
export default HangmanPopout