import React from 'react'
import ReactPlayer from 'react-player'

const YoutubeChannelPage = ({ videoLink }) => {

    return (
        <div className="youtubeChannelPage">
            <h2>My Latest Video</h2>
            <div className='VideoPlayer'>
                <ReactPlayer url={videoLink} />
            </div>
        </div>
    )
}

export default YoutubeChannelPage;