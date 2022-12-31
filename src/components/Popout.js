import React from 'react'
import CrimeRatePopout from './CrimeRatePopout'
import ReminderPopout from './ReminderPopout'
import SDSPopout from './SDSPopout'
import PersonalWebsitePopout from './PersonalWebsitePopout'
import ClinicManagerPopout from './ClinicManagerPopout'
import HangmanPopout from './HangmanPopout'
import MatchingPopout from './MatchingPopout'
import BreakoutPopout from './BreakoutPopout'
import { popoutInfo } from './Data-Pre-Server'
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'

const typeToComponent = {
    'CrimeRate': () => {
        return (< CrimeRatePopout popoutData={popoutInfo['CrimeRate']} />)
    },
    'Reminder': () => { return (<ReminderPopout popoutData={popoutInfo['Reminder']} />) },

    'SDS': () => { return (<SDSPopout popoutData={popoutInfo['SDS']} />) }
    ,
    'clinicManager': () => { return (<ClinicManagerPopout popoutData={popoutInfo['clinicManager']} />) }
    ,
    'hangman': () => { return (<HangmanPopout popoutData={popoutInfo['hangman']} />) }
    ,
    'matching': () => { return (<MatchingPopout popoutData={popoutInfo['matching']} />) }
    ,
    'breakout': () => { return (<BreakoutPopout popoutData={popoutInfo['breakout']} />) }
}
const Popout = ({ type, setActivePopup }) => {
    console.log('Made it to popout with type: ', type)
    return (

        <Modal
            size="lg"
            show={true}
            onHide={() => { setActivePopup('') }}
            aria-labelledby="example-modal-sizes-title-lg"
            className='Modal'
        >
            <ModalHeader>
                <ModalTitle id="example-modal-sizes-title-lg">
                    {popoutInfo[type].Title}
                </ModalTitle>
            </ModalHeader>
            <ModalBody className='modalBody'>
                {typeToComponent[type]()}
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-outline-primary" onClick={() => { setActivePopup('') }}>Close</button>
            </ModalFooter >
        </Modal>
    )





}
export default Popout