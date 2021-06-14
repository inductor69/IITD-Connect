import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation, Redirect } from 'react-router-dom'
import "./Login.css";
import axios from "axios";

export default function Login() {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post('/login',{
        _id:email,
        password:password
    }).then((res) => {
        if(res.status === 200){
          sessionStorage.setItem("isAuthenticated",true)
          setRedirectToReferrer(true);
        }
    }).catch(res => {
      if(res.response.status === 401){
        setMessage("Invalid Credentials")
      }
    })
  }

  useEffect(() => {
    setRedirectToReferrer(false);
  },[redirectToReferrer])

  if (redirectToReferrer || redirectToReferrer === "true") {
    return <Redirect to={from} />;
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Kerberos Id</Form.Label>
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