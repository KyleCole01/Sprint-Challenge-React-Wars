import React, {useState, useEffect} from 'react';
import axios from "axios";

import { Container, Col, Row } from 'reactstrap'; 
import PersonCard from './components/Person';

const App = () => {
  const [data, setdata] = useState([]);
  
  useEffect(() => {
      axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        setdata(res.data['results'])
        console.log(res.data['results']);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <Container fluid={true}>
        <Row  xs="4" className="personRow">
          {data.map((item, index) => (
          <Col className="personCard" key={index}>
            <PersonCard {...item}/>
          </Col>
        ))}
        </Row>
        </Container>
    </div>
  );
}


export default App;
