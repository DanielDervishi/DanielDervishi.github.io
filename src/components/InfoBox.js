import React from 'react'
import Content from './Content';


const InfoBox = ({ title, content, technologies, img, external, setActivePopup, identifier }) => {
    console.log('quick check')
    return (<li className='InfoBox card'>
        <img className="card-img-top" src={process.env.PUBLIC_URL + "Images/" + img} alt="Card image cap"></img>
        <div className='card-body'>
            <h3 className='InfoBoxTitle card-title'>
                {title}
            </h3>
            <div className='card-text'>
                <Content contentSections={content} />
            </div>
            <div className="InfoBoxTechnologies card-subtitle mb-2 text-muted">
                {technologies}
            </div>
        </div>
        <div className="InfoBoxButtons card-footer">
            {identifier != undefined ?
                <button className='projectButton btn btn-outline-primary' onClick={() => {
                setActivePopup(identifier)
                console.log(identifier)
            }}>More Info</button>
                 : <></>}
            {external != undefined ?
                <a href={external.link} target = '_blank'>
                    <button className='projectButton btn btn-outline-primary' >{external.name}</button>
                </a> : <></>}

        </div>
    </li>)
}

export default InfoBox;
