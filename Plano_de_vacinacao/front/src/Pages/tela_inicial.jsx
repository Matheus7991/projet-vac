import React from 'react';
import { Button, Navbar} from 'react-bootstrap';
import Card from '../Components/Card/index'; 

const App = () => (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Vacinação contra Covid</Navbar.Brand>
      </Navbar>

      <Card/>
    </div>
);

export default App;
