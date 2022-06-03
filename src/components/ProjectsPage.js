import React from 'react'
import InfoCollection from './InfoCollection';

const ProjectsPage = ({ projectData, setActivePopup }) => {

    return (
        <>
            <h1>
                Projects
            </h1>
            <div className="row">
                <InfoCollection data={projectData} setActivePopup={setActivePopup} />
            </div>
        </>
    )
}

export default ProjectsPage;