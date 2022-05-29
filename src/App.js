import { useState, useEffect } from 'react'
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import YoutubeChannelPage from './components/YoutubeChannelPage';
import axios from 'axios'
import LeetCodePage from './components/LeetCodePage';
import { projectData, navIcons } from './components/Data-Pre-Server'
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  const [analytics, setAnalytics] = useState({})
  const [videoLink, setVideoLink] = useState('')
  const [URL, setURL] = useState('/')
  const navigate = useNavigate();
  const getAnalytics = () => {
    axios.get('https://leetcode-stats-api.herokuapp.com/Derv-codes').then((promise) => {
      setAnalytics(promise.data)
    })
  }
  const getLastVideoFromYoutubeAPI = () => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${'UCUSd-PH3X92l4dmVJtXgtTg'}&maxResults=1&order=date&type=video&key=${'AIzaSyC4mGzUyWbUhjiaL_9dAWG3nrajkRqLV7c'}`).then((promise) => {
      setVideoLink('https://www.youtube.com/watch?v=' + promise.data.items[0].id.videoId)
    }
    )
  }

  useEffect(() => {
    getAnalytics()
    getLastVideoFromYoutubeAPI()
  }, [])

  console.log(URL)
  return (<>
    <NavBar navIcons={navIcons} setURL={setURL} navigate={navigate} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage projectData={projectData} />} />
      <Route path="/youtube-channel" element={<YoutubeChannelPage videoLink={videoLink} />} />
      <Route path="/leetcode" element={<LeetCodePage analytics={analytics} />} />
    </Routes>
  </>
  )
}

export default App;
