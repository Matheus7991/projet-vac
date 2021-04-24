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
        <Card.Header as="h5">Agendamento</Card.Header>
        <Card.Body>
          <Form>
          <Card.Title>Dados pessoais:</Card.Title>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>

            <Form.Group>
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
            </Form.Group>

            <Card.Title className="mt-5">Agendamento:</Card.Title>
            <br />
            <Form.Group>
              <Form.Label>Data do agendamento</Form.Label>
              <br />
              <DatePicker
                selected={dataAgendamento}
                onChange={(date) => setdataAgendamento(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Horário</Form.Label>
              <Form.Control as="select">
                <option> </option>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
              </Form.Control>
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
