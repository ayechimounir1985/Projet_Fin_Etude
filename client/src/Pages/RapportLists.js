import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card } from "react-bootstrap";
import { GetAllRapport } from "../Redux/RapportSlice";
import UpdateRapportmodal from "../Components/UpdateRapportmodal";

const RapportLists = () => {
  const dispatch = useDispatch();
  const RappLists = useSelector((state) => state.userrapport.usersrapport);

  useEffect(() => {
    dispatch(GetAllRapport());
  }, []);
  return (
    <div>
      {RappLists?.map((el) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{el?.Client}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {el?.Frame}
              </Card.Subtitle>
              <Card.Text>
               {el?.Adress}
              </Card.Text>
              <UpdateRapportmodal el={el}/>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default RapportLists;
