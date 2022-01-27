import React from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { data } from "../utils/datalist";

export default function Datalist() {
  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.dataset.name);
  };

  return (
    <Card style={{ width: "100%", height: "80%" }}>
      <Card.Body>
        <Tabs
          defaultActiveKey="object"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="object" title="Object">
            <ul className="list">
              {data.objects.map((obj) => {
               return <li key={obj.name} draggable="true" data-name={obj.name} onDragStart={drag}>
                  {obj.name}
                </li>;
              })}
            </ul>
          </Tab>
          <Tab eventKey="function" title="Function">
            no Functions
          </Tab>
          <Tab eventKey="class" title="Class">
            No classes
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}
