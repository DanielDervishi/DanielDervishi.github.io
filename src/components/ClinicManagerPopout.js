import React from 'react'

const ClinicManagerPopout = () => {
    return (<div className='popoutBody'>

    <h2 className='modalBodyTitle'>Motivation</h2>

    <ul>
        <li>
            When deciding on a project idea for CSC207 (Software Design), we took into account each group member's interests and given that one of our team members is studying both Biology and Computer Science, we landed on a Clinic Management System
        </li>
    </ul>


    <h2 className='modalBodyTitle'>What we did</h2>
    <ul>
        <li>
            Built a system with multiple user permission levels (Admin, Doctor, Patient, Secretary), each with a set of commands relevant to the permission level split into pages
        </li>
        <li>
            Created custom prescription management, logging, patient report management and appointment booking subsystems (the core features of our project)
        </li>
        <li>
            Followed SOLID design Principles and the clean architecture
        </li>
        <li>
            Used CRC (Class-Responsibility-Collaboration) cards and UML Diagram to map out the design of our program
        </li>
    </ul>
    <h2 className='modalBodyTitle'>What I did (For Recruiters (^▽^)/)</h2>
    <ul>
        <li>
            Led a team of 8 developers in creating the system
        </li>
        <li>
            Worked on both entity and use case levels of user contact, prescription management, report management, log management and patient appointment subsystems
        </li>
        <li>
            Was responsible for 50% of tests and documented each of the systems described in the above point
        </li>
    </ul>
    <h2 className='modalBodyTitle'>Some Demos</h2>
    <h4 className='modalBodyTitle'>User Contact</h4>
    <div className='popoutVideo'>
        <video controls autoPlay>
            <source src={process.env.PUBLIC_URL + 'Videos/User-Contact.mp4'} type="video/mp4" />
        </video> 
    </div>
    <h4 className='modalBodyTitle'>Prescription Management</h4>
    <video controls autoPlay>
            <source src={process.env.PUBLIC_URL + 'Videos/Prescription-Management.mp4'} type="video/mp4" />
        </video> 
    <h2 className='modalBodyTitle'>Complete List of Commands:</h2>
    <a href='https://github.com/The-CSC207-Group/Project207#command-list' target = '_blank' className='ClinicManagerReadme'>https://github.com/The-CSC207-Group/Project207#command-list</a>
</div>)
}
export default ClinicManagerPopout