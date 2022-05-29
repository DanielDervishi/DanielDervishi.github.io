import React from 'react'

const HomePage = () => {

    return (

        <div className='HomePage'>
            <h1 className='IntroTitle CenterItems font-weight-bold'>
                Hi!
            </h1>
            <div className='IntroText CenterItems font-weight-bold'>
                My name is Daniel Dervishi and I'm a second year computer science major at the University of Toronto.
            </div>
            <div className="row">
                <div className="card-deck">
                    <div className='card AreasOfInterest' style={{ "width": "18rem" }}>
                        <h4 className='card-header'>
                            Areas of interest related to or in Computer Science:
                        </h4>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                Software Engineering
                            </li>
                            <li className='list-group-item'>
                                Theoretical Computer Science
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='card RelevantCourses' style={{ "width": "18rem" }}>
                    <h4 className='card-header'>
                        Relevant Courses:
                    </h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            Enriched Introduction to the Theory of Computation
                        </li>
                        <li className='list-group-item'>
                            Foundations of computer science I
                        </li>
                        <li className='list-group-item'>
                            Foundations of computer science II
                        </li>
                        <li className='list-group-item'>
                            Software Design Principles
                        </li>
                        <li className='list-group-item'>
                            Calculus with proofs
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePage;