import React from 'react'
import InfoBox from './InfoBox'

const InfoCollection = ({ data }) => {
    const ulContent = () => {
        return (data.map(data_item => <InfoBox key={data_item.title} title={data_item.title} content={data_item.content} technologies={data_item.technologies} img={data_item.img} github={data_item.github} />))
    }
    return (
        <ul className='infoCollection d-flex justify-content-start flex-wrap card-deck'>
            {ulContent()}
        </ul>
    )
}


export default InfoCollection;