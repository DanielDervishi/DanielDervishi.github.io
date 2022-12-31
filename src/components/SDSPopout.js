import React from 'react'

const SDSPopout = () => {
    return (<div className='popoutBody'>
        <h2 className='modalBodyTitle'>Motivation</h2>

        <ul>
            <li>Wanted to gain more development experience</li>
            <li>Wanted to work on a large and new codebase to improve my ability to onboard</li>
            <li>Wanted to contribute to something I used and that I knew had a positive impact on people</li>
        </ul>

        <h2 className='modalBodyTitle'>Context: What project I worked on</h2>
        <ul>
            <li>
                As a part of SDS, I worked on MarkUs, the project with the largest codebase impacting the entirety of the computer science department at the University of Toronto and the University of Waterloo.
            </li>
            <li>
                "MarkUs is a web application that allows students to submit work and TAs to mark and annotate that work electronically. MarkUs simplifies and streamlines the administrative tasks surrounding assignment grading, making it easier for TAs to give high-quality feedback, and instructors to review the grading while it is in progress." - David Liu
            </li>
        </ul>
        <h2 className='modalBodyTitle'>What I did (For Recruiters (｡･o･｡)ﾉ)</h2>
        <ul>
            <li>
                Approximately Bi-Weekly for a total of 12 I was assigned a programming task relevant to MarkUs and presented my work weekly to professor Liu and my peers
            </li>
            <li>
            Summary of Concepts/Frameworks I Learned:
            <ul>
                <li>    
                    I learned how to use multiple frameworks and new languages (Ruby, Ruby on Rails, RSpec, Action Policy, Active Record)
                </li>
                <li>
                    I learned about the Model-View-Controller Design Pattern used in Rails
                </li>
                <li>
                    I learned about the different aspects of the C.R.U.D. (Create, Read, Update, Delete) acronym and how they are implemented in rails 
                </li>
                <li>
                    I learned how rails goes from receiving a request to providing the correct response
                </li>
                <li>
                    I learned how to interact with ActiveRecord (ruby's framework used to link entities and the database) to store data
                </li>
                <li>
                    I learned what sessions (Responsible for storing across HTTP requests) are and how they work 
                </li>
                <li>I learned how authorization works in conjunction with sessions</li>
                <li>I learned how to effectively test the code I implemented as well as that of others</li>
            </ul>
            </li>
            <li>Tested Code written by others</li>
            <li>Fixed and tested an issue where TAs could mark an assignment from a group they were not assigned to. I later extended this change to prevent them from viewing, downloading and reviewing these assignments as well.</li>
            <li>Fixed an issue where a user who switched roles wasn't authorized to access methods they would usually have access to</li>
        </ul>
        <h2 className='modalBodyTitle'>How I grew from the experience</h2>
        <ul>
        
        <li>Improved in my ability to pick up a new task and approach it by asking the right questions</li>
        <li>Improved the efficiency of my problem-solving by using a google doc to track my thought process (prevents going in circles and assures you explain your reasoning)</li>
        <li>Improved my presentation quality and my ability to communicate technical problems</li>
        </ul>
    </div>)
}
export default SDSPopout