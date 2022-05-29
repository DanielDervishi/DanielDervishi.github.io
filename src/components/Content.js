import React from 'react'
import ContentSection from './ContentSection'

const Content = ({ contentSections }) => {
    return (<ul>
        {
            contentSections.map(contentSection => <ContentSection key={contentSection} data={contentSection} />)
        }
    </ul>
    )
}

export default Content