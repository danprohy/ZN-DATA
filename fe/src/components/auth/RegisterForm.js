import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContexts } from "../../contexts/AuthContexts";
import Alert from "../layout/Alert";

const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContexts);

  // Router
  // const history = useNavigate();

  // Local Storage
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Alert Miss when Wrong Pass
  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;
  // Luu username, password khi nguoi dung nhap
  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });

  // An Register button => Form submit
  const register = async (event) => {
    event.preventDefault(); // Tranh submit theo kieu form HTML
    if (password !== confirmPassword) {
      // Nhap lai pass ko dung
      setAlert({ type: "danger", message: "Passwords do not match!" });
      setTimeout(() => setAlert(null), 2000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      // Neu ko dang ky thanh cong (server || trung username ....)
      if (!registerData.success) {
        // history('/dashboard'); // day di noi khac
        // Tuy nhien khong can do ham userLoad o AuthContexts da duoc goi o Auth.js
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form onSubmit={register}>
        <Alert info={alert} />

        <Form.Group className="mb-2 mt-4 w-100">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group className="mb-2 mt-2">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Form.Group className="mb-2 mt-2">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>
        <Button className="btn btn-success mt-2" type="submit">
          Register
        </Button>
      </Form>
      <p className="mt-4">
        Already have an account
        <Link to="/login">
          <Button size="sm" className="btn btn-info ms-lg-2">
            Login
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
