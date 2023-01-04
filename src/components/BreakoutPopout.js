import React from 'react'

const BreakoutPoput = () => {
    return (<div className='popoutBody'>
        <h2 className='modalBodyTitle'>Motivation</h2>
        <ul>
            <li>
                When learning to program in assembly using the MIPS Architecture in CSC258, we built an implementation of the famous breakout game from scratch
            </li>
        </ul>
        <h2 className='modalBodyTitle'>Demo</h2>
        <div className='popoutVideo'>
            <video controls autoPlay>
                <source src={process.env.PUBLIC_URL + 'Videos/Breakout.mp4'} type="video/mp4" />
            </video>
        </div>
        <ul>
            <li>
                Apologies for the laggy gameplay... my computer doesn't handle recording and simulating gameplay simultaneously well ꒰⍨꒱
            </li>
        </ul>
        <h2 className='modalBodyTitle'>What I did (For Recruiters (╹◡╹)ノ)</h2>
        <ul>
            <li>
                Implemented most of the game excluding the implementation of multiple levels
            </li>
        </ul>

        <h2 className='modalBodyTitle'>Some Features</h2>
        <ul>
            <li>
                Multiple Levels
            </li>
            <li>
                Bricks take multiple hits to break
            </li>
        </ul>
    </div>)
}
export default BreakoutPoput