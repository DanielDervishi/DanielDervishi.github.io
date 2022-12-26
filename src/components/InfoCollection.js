import React from 'react'
import InfoBox from './InfoBox'

const InfoCollection = ({ data, setActivePopup }) => {
    const ulContent = () => {
        return (data.map(data_item =>
            <InfoBox key={data_item.title} title={data_item.title} content={data_item.content} technologies={data_item.technologies} img={data_item.img} external={data_item.external} setActivePopup={setActivePopup} identifier={data_item.identifier} />)
        )
    }
    return (
        <ul className='infoCollection d-flex justify-content-center flex-wrap card-deck'>
            {ulContent()}
        </ul>
    )
}


export default InfoCollection;