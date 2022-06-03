import React from 'react'
import CrimeRatePopout from './CrimeRatePopout'
import ReminderPopout from './ReminderPopout'
import { popoutInfo } from './Data-Pre-Server'
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap'

const typeToComponent = {
    'CrimeRate': () => {
        return (< CrimeRatePopout popoutData={popoutInfo['CrimeRate']} />)
    },
    'Reminder': () => { return (<ReminderPopout popoutData={popoutInfo['Reminder']} />) }
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