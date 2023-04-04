import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="w-25">
      <Form>
        <Form.Group className="mb-2 mt-4">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2 mt-2">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-2 mt-2">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirm password"
            required
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
}

export default RegisterForm;