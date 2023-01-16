import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from "react";
import { userLogin } from "./userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pageChange } from "../navigation/navigationSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, error } = useSelector((state) => state.user);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    dispatch(pageChange("app"));
  }, [dispatch]);

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin((login) => ({ ...login, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userLogin(login)).then(userInfo ? navigate(`/events`) : null);
  }

  console.log("error login", error)


  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={login.username}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={login.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    {error ? error.map(err => {
        return <Alert variant="danger" key={err}>{err}</Alert>
    }) : null}
    </div>
  );
}

export default Login;
