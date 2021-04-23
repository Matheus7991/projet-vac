import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Formulario() {
  const [dataNascimento, setdataNascimento] = useState(null);
  const [dataAgendamento, setdataAgendamento] = useState(null);

  return (


    <Container>
      <Card className="mt-5">
        <Card.Header as="h5">Dados pessoais</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome completo:</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Label>Data de nascimento</Form.Label>
            <br />
            <DatePicker
              selected={dataNascimento}
              onChange={(date) => setdataNascimento(date)}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date()}
              showYearDropdown
              scrollableMonthYearDropdown
            />

            <Card.Title className="mt-5">Agendamento:</Card.Title>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Data do agendamento</Form.Label>
              <br />
              <DatePicker
                selected={dataAgendamento}
                onChange={(date) => setdataAgendamento(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </Form.Group>

            

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Formulario;


