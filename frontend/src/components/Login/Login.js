import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  { Redirect, useHistory } from 'react-router-dom'
import "./Login.css";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [status,setStatus] = useState(200);
  let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('form submitted')
    await axios.post('/login',{
          _id:email,
          password:password
      }).then((res) => {
          setStatus(res.status)
          if(status !== 200){
              setMessage(res.body)
          }
      })
      console.log(status)
      if(status === 200){
        console.log('inside if status===200');
        history.push("/")
      } else {
        setMessage("user don't exist ")
      }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <h3>{message}</h3>
    </div>
  );
}