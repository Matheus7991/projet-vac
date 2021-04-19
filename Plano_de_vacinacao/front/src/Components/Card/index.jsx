import React from 'react'
import {Button, Card} from 'react-bootstrap';
import logo from './foto-vacinacao.jpeg';

 const card = () => (
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Plano de vacinação</Card.Title>
          <Card.Text>
            Olá, aqui você pode agendar seu horario de vacinação ou conferir a lista de agendamento. Escolha a opção abaixo. 
          </Card.Text>
          <Button variant="primary" className="m-2">Agendar</Button>
          <Button variant="primary" className="m-2">Lista de agendamento</Button>
        </Card.Body>
    </Card>    
  </div>
</div>
)



export default card;
