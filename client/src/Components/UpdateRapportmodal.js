import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {UpdateRapport} from '../Redux/RapportSlice'
const UpdateRapportmodal = ({el}) => {
  const dispatch = useDispatch()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [UpdatedRapport, setUpdatedRapport] = useState({
    _id: el._id
  })
  const HandleChange = (e)=>{
    setUpdatedRapport({...UpdatedRapport, [e.target.name] : e.target.value})
  }
  const Updating = (e)=>{
  e.preventDefault();
  dispatch(UpdateRapport(UpdatedRapport))
  handleClose()
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
       
       <Form.Label>Frame</Form.Label>
       <Form.Control defaultValue={el.Frame} onChange={HandleChange} name='Frame' type="text" placeholder="Enter Frame" />
       <Form.Label>Type</Form.Label>
       <Form.Control defaultValue={el.Type} onChange={HandleChange} name='Type' type="text" placeholder="Enter Type" />
       <Form.Label>Client</Form.Label>
       <Form.Control defaultValue={el.Client} onChange={HandleChange} name='Client' type="text" placeholder="Enter Name" />
       <Form.Label>Adress</Form.Label>
       <Form.Control defaultValue={el.Adress} onChange={HandleChange} name='Adress' type="text" placeholder="Enter Adress" />
       <Form.Label>FPM</Form.Label>
       <Form.Control defaultValue={el.FPM} onChange={HandleChange} name='FPM' type="text" placeholder="Enter FPM" />
       <Form.Label>DateandHourDepart</Form.Label>
       <Form.Control defaultValue={el.DateandHourDepart} onChange={HandleChange} name='DateandHourDepart' type="text" placeholder="Enter Date And Hour Depart" />
       <Form.Label>DateandHourFeedback</Form.Label>
       <Form.Control defaultValue={el.DateandHourFeedback} onChange={HandleChange} name='DateandHourFeedback'type="text" placeholder="Enter Date AND Hour Feedback" />
       <Form.Label>TechnicalReport</Form.Label>
       <Form.Control defaultValue={el.TechnicalReport} onChange={HandleChange} name='TechnicalReport' type="text" placeholder="Enter Technical Report" />
       <Form.Label>RemainstobeDone</Form.Label>
       <Form.Control defaultValue={el.RemainstobeDone} onChange={HandleChange} name='RemainstobeDone' type="text" placeholder="Enter Conclustion" />
       
      
                  
   </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Updating}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateRapportmodal
