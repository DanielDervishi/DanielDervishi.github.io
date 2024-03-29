import React from 'react'
const navIcons = [{
    "URL": "/",
    "text": "Home",
    "image": () => {
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="black" className="bi bi-123" viewBox="0 0 16 16">
            <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961h1.174Zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057h1.138Zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75v.96Z" />
        </svg>
    }
},
{
    "URL": "/projects",
    "text": "Projects and Experiences",
    "image": "Some Image"
},
{
    "URL": "/youtube-channel",
    "text": "Youtube Channel",
    "image": "Some Image"
},
{
    "URL": "/leetcode",
    "text": "LeetCode Stats",
    "image": "Some Image"
}
]
const projectData = [
    {
        "title": "UofT Blueprint - Project Lead",
        "identifier": "blueprint",
        "content": [],
        "technologies": "Technologies TBD",
        "img": "Blueprint-Logo.png",
        "external": {
            "link": "https://uoftblueprint.org/#/",
            "name": "Club Website"
        }
    },
    {
        "title": "UofT (MarkUs) SDE Internship - Summer 2023",
        "identifier": "markusInternship",
        "content": [],
        "technologies": "Ruby on Rails, React",
        "img": "MarkUs-Logo.png",
        // "external": {
        //     "link": "https://uoftblueprint.org/#/",
        //     "name": "Club Website"
        // }
    },
    {
        "title": "Students Developing Software",
        "identifier": "SDS",
        "content": [],
        "technologies": "Ruby, Ruby on Rails, Action Policy, Rspec",
        "img": "SDS.png",
        "external": {
            "link": "https://github.com/MarkUsProject/Markus",
            "name": "Main Github Page"
        }
    },
    {
        "title": "Covid-19 Crime Rate Relation Visualization",
        "identifier": "CrimeRate",
        "content": [],
        "technologies": "Python",
        "img": "Covid_Project_Img.png",
        "external": {
            "link": "https://github.com/DanielDervishi/CSC110-Final-Project",
            "name": "Github"
        }
    },
    {
        "title": "Personal Website",
        "content": [],
        "technologies": "React, JavaScript, HTML, CSS, Bootstrap",
        "img": "personalWebsite.png",
        "external": {
            "link": "https://github.com/DanielDervishi/DanielDervishi.github.io",
            "name": "Github"
        }
    },
    {
        "title": "Clinic Management System",
        "identifier": "clinicManager",
        "content": [],
        "technologies": "Java, JUnit",
        "img": "clinicManager.png",
        "external": {
            "link": "https://github.com/The-CSC207-Group/Project207",
            "name": "Github"
        }
    },
    {
        "title": "Hangman",
        "identifier": "hangman",
        "content": [],
        "technologies": "Swift",
        "img": "Hangman.png",
    },
    {
        "title": "Matching",
        "identifier": "matching",
        "content": [],
        "technologies": "Swift",
        "img": "Matching.png"
    },
    {
        "title": "Breakout",
        "identifier": "breakout",
        "content": [],
        "technologies": "MIPS Assembly",
        "img": "Breakout.png"
    },
    {
        "title": "Chrome Web Extension - Reminder Application",
        "content": [],
        "technologies": "HTML, CSS and JavaScript",
        "img": "OnTime_Project_Img.png",
        "external": {
            "link": "https://chrome.google.com/webstore/detail/on-time-ba/ncbhngpkilpfenmofalllgccllibjpbp",
            "name": "Chrome Web Store"
        }
    }

]
const popoutInfo = {
    'CrimeRate': {
        'Title': 'Covid-19 Crime Rate Relation Visualization',
        'Points': []
    },
    'Reminder': {
        'Title': 'Chrome Web Extension - Reminder Application',
        'Points': []
    },
    'SDS': {
        'Title': 'Students Developing Software',
        'Points': []
    },
    'personalWebsite': {
        'Title': 'Personal Website',
        'Points': []
    },
    'clinicManager': {
        'Title': 'Clinic Management System',
        'Points': []
    },
    'hangman': {
        'Title': 'Hangman',
        'Points': []
    },
    'matching': {
        'Title': 'Matching Card Game',
        'Points': []
    },
    'breakout': {
        'Title': 'Breakout Game',
        'Points': []
    },
    'blueprint': {
        'Title': 'UofT Blueprint',
        'Points': []
    },
    'markusInternship': {
        'Title': 'UofT (MarkUs) SDE Internship - Summer 2023',
        'Points': []
    }
}


export { navIcons, projectData, popoutInfo }