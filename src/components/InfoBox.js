import React from 'react'
import Content from './Content';


const InfoBox = ({ title, content,
    technologies, img, github }) => {
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
            <button className='projectButtonMore btn btn-primary '>Link1</button>
            <a href={github}>
                <button className='projectButtonGithub btn btn-primary'>Github</button>
            </a>
        </div>
    </li>)
}

export default InfoBox;
