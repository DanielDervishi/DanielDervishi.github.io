import React from 'react'
import ReactPlayer from 'react-player'

const YoutubeChannelPage = ({ videoLink }) => {

    return (
        <div className="youtubeChannelPage">
            <h2>About</h2>
            <div className='YoutubeChannelPageInfo'>
                With the goal of improving my communication skills and forming cohesive and comprehensive explanations, I began this youtube channel where I post an explanation to a new leetcode problem from a well known interview preparation list known as the neetcode 150.
            </div>
            <h2>My Latest Video</h2>
            <div className='VideoPlayer'>
                <ReactPlayer url={videoLink} />
            </div>
        </div>
    )
}

export default YoutubeChannelPage;