import './App.css';
import Sidebar from './components/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mainbar from './components/Mainbar';
import { useState, React } from "react";
import { MyContext } from "./MyContext";
import Note from './components/Note';


function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3,setValue3]= useState("")

  return (
    <div className="App">
      <Row>
        <Col sm={3}><Sidebar/></Col>
        <Col sm={9} id='back'>
          <MyContext.Provider value={{ value: [value, setValue], value2: [value2, setValue2],value3:[value3,setValue3] }} >
          <Mainbar/>
          <Note/>
          </MyContext.Provider>
        </Col>
      </Row>
    </div>
  );
}

export default App;
