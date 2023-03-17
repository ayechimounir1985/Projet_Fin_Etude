import React, { useState } from "react";
import {Button ,Form} from "react-bootstrap";
import {useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddRapport } from "../Redux/RapportSlice";

const AddRapports = () => {
  const dispatch = useDispatch()
  const [newrapport, setnewRapport] = useState({})
  const HandleChange = (e)=>{
    setnewRapport({...newrapport, [e.target.name] : e.target.value})
  }

  const Adding = (e)=>{
  e.preventDefault();
  dispatch(AddRapport(newrapport))

  }
  return (
    <div>
      <Form>
       
          <Form.Label>Frame</Form.Label>
          <Form.Control onChange={HandleChange} name='Frame' type="text" placeholder="Enter Frame" />
          <Form.Label>Type</Form.Label>
          <Form.Control onChange={HandleChange} name='Type' type="text" placeholder="Enter Type" />
          <Form.Label>Client</Form.Label>
          <Form.Control onChange={HandleChange} name='Client' type="text" placeholder="Enter Name" />
          <Form.Label>Adress</Form.Label>
          <Form.Control onChange={HandleChange} name='Adress' type="text" placeholder="Enter Adress" />
          <Form.Label>FPM</Form.Label>
          <Form.Control onChange={HandleChange} name='FPM' type="text" placeholder="Enter FPM" />
          <Form.Label>DateandHourDepart</Form.Label>
          <Form.Control onChange={HandleChange} name='DateandHourDepart' type="text" placeholder="Enter Date And Hour Depart" />
          <Form.Label>DateandHourFeedback</Form.Label>
          <Form.Control onChange={HandleChange} name='DateandHourFeedback'type="text" placeholder="Enter Date AND Hour Feedback" />
          <Form.Label>TechnicalReport</Form.Label>
          <Form.Control onChange={HandleChange} name='TechnicalReport' type="text" placeholder="Enter Technical Report" />
          <Form.Label>RemainstobeDone</Form.Label>
          <Form.Control onChange={HandleChange} name='RemainstobeDone' type="text" placeholder="Enter Conclustion" />
          
         
        
                
        <Button onClick={Adding} variant="primary">
          Confirm
        </Button>
      </Form>
    </div>
  );
};

export default AddRapports;
