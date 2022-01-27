import { useState } from "react";
import { Col, Container, Row} from "react-bootstrap";
import FabricCanvas from "./components/FabricCanvas";
import Navbar from "./components/Navbar";
import Datalist from "./sections/Datalist";

function App() {
  const [canvas, setCanvas] = useState();

  return (
    <div className="App">
      <Navbar canvas={canvas}></Navbar>
      <Container className="height-rest">
        <Row className="height-rest">
          <Col className="col-4">
            <Datalist></Datalist>
          </Col>
          <Col className="col-8">
            <FabricCanvas setCanvas={setCanvas} canvas={canvas}></FabricCanvas>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
