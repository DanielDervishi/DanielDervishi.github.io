import React from 'react'

const CrimeRatePopout = () => {
    return (
        <div className='popoutBody'>

            <a href='https://viral-crimes-during-pandemic.herokuapp.com/' target="_blank" className='crimeRateLink'>Open Me! (Link to deployment of app)</a>

            <h2 className='modalBodyTitle'>Motivation</h2>

            <ul>
                <li>
                This project aims to investigate, understand, and visually 
                communicate the impact of the COVID-19 pandemic on crime rates 
                in various neighbourhoods of urban Vancouver, Canada.
                </li>
            </ul>

            <h2 className='modalBodyTitle'>What we did</h2>
            <ul>
                <li>We use a null hypothesis model and utilize crime data from the Vancouver Police Department going back to 2003 to generate predictions of the expected crime rates in 2020 and 2021 for each month during the pandemic
                </li>
                <li>We then compare these predictions with the actual crime rates in order to attempt to ascertain how the COVID-19 pandemic may have impacted the rates of specific crimes</li>

            </ul>
            <h2 className='modalBodyTitle'>What I did (For Recruiters ( ﾟ▽ﾟ)/)</h2>
            <ul>
                <li>
                    Led the team of 4 developers through the all phases of the project (planning and execution) and delegated tasks
                </li>
                <li>
                    Chose dataset and reduced startup time of application 5x over by proceesing the csv to include only necessary data for model generation and comparison and using pandas
                </li>
                <li>
                    Created data structures responsible for passing data to the front end
                </li>
                <li>
                    Deployed the local application to the internet using Dash and Heroku
                </li>
            </ul>
            <h2 className='modalBodyTitle'>Some Features and Explanations</h2>
            <ul>
                <li>
                    At the top of the application there is a dropdown allowing users to view the impact of covid on different crimes
                </li>
                <li> Colours of different regions and their correspondence
                <ul>
                    <li>
                        Green ~ P-index -100: Decrease in number of crimes in a given month compared to predicted value using pre-covid data
                    </li>
                    <li>
                        Grey ~ P-index 0: Same number of crimes in a given month during the pandemic as predicted using pre-covid data
                    </li>
                    <li>
                        Red ~ P-index 100: Increase in number of crimes in a given month compared to predicted value using pre-covid data
                    </li>
                </ul>
                </li>
                <li>
                    Pressing the play button shows how number of crimes differ from their expected values for each month in the pandemic
                </li>
                <li>
                    Hovering over a region of the heatmap displays more information about the region
                </li>
                <li>
                    Users can zoom in and out of the map
                </li>
            </ul>
        </div>
    )
}
export default CrimeRatePopout