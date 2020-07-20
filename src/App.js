import React from 'react';
import logo from './logo.svg';
import SampleList from './Components/SampleList';
import Greeting from './Components/Greeting';
import MentorForm from './Components/MentorForm';
import MentorList from './Components/MentorList';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="12" md="6">
            <MentorForm />
          </Col>

          <Col xs="12" md="6">
            <MentorList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
