import React from "react";
import {Button ,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const AddRapport = () => {
  return (
    <div>
      <Form>
       
          <Form.Label>Frame</Form.Label>
          <Form.Control type="text" placeholder="Enter Frame" />
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" placeholder="Enter Type" />
          <Form.Label>Client</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="Enter Adress" />
          <Form.Label>FPM</Form.Label>
          <Form.Control type="text" placeholder="Enter FPM" />
          <Form.Label>DateandHourDepart</Form.Label>
          <Form.Control type="text" placeholder="Enter Date And Hour Depart" />
          <Form.Label>DateandHourFeedback</Form.Label>
          <Form.Control type="text" placeholder="Enter Date AND Hour Feedback" />
          <Form.Label>TechnicalReport</Form.Label>
          <Form.Control type="text" placeholder="Enter Technical Report" />
          <Form.Label>RemainstobeDone</Form.Label>
          <Form.Control type="text" placeholder="Enter Conclustion" />
          
         
        
        
          
       
        <Button variant="primary" type="submit">
          Confirm
        </Button>
      </Form>
    </div>
  );
};

export default AddRapport;
