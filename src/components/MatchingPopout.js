import React from 'react'

const MatchingPopout = () => {
    return (<div className='popoutBody'>
        <h2 className='modalBodyTitle'>Motivation</h2>
        <ul>
            <li>
                In my first IOS programming class, this was one of the projects I worked on for an assignment
            </li>
        </ul>
        <h2 className='modalBodyTitle'>Demo</h2>
        <div className='popoutVideo'>
            <video controls autoPlay>
                <source src={process.env.PUBLIC_URL + 'Videos/Matching.mp4'} type="video/mp4" />
            </video>
        </div>

        <h2 className='modalBodyTitle'>What I did (For Recruiters (＾◇＾）ノ)</h2>
        <ul>
            <li>
                Created the entire application
            </li>
        </ul>
        <h2 className='modalBodyTitle'>Some Features</h2>
        <ul>
            <li>
                Multiple Game Modes: Timed Gameplay and 2-player games
            </li>
            <li>
                Leaderboard for Timed Gameplay
            </li>

        </ul>
    </div>)
}
export default MatchingPopout