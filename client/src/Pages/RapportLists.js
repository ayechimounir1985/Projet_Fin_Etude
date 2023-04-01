import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddRapport } from "../Redux/RapportSlice";
import { Card } from "react-bootstrap";

const RapportLists = () => {
  const dispatch = useDispatch();
  const userrapports = useSelector((state) => state.User.userrapports);

  useEffect(() => {
    dispatch(AddRapport());
  }, []);
  return (
    <div>
      {userrapports?.map((el) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{el.Client}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {el.Frame}
              </Card.Subtitle>
              <Card.Text>
               {el.Adress}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default RapportLists;
