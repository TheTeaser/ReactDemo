import "./Tour.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

let data = require("../../../data/data.json");

function Tour() {
  const [editCounter, setEditCounter] = useState(0);

  const incrementEditCounter = () => {
    setEditCounter(editCounter + 1);
  };

  return (
    <div>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-md-6" key={item.id}>
              <div style={{ margin: "10px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <p>{item.info}</p>
                      <p>
                        Number of times this city was edited is: {editCounter}
                      </p>
                    </Card.Text>
                    <Button variant="primary" onClick={incrementEditCounter}>
                      Open
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tour;
