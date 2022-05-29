import React from 'react'
import InfoCollection from './InfoCollection';

const ProjectsPage = ({ projectData }) => {

    return (
        <>
            <h1>
                Projects
            </h1>
            <div className="row">
                <InfoCollection data={projectData} />
            </div>
        </>
    )
}

export default ProjectsPage;