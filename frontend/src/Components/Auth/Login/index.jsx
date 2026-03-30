import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { useUserContext } from '../../../Context/User';

const Login = () => {
    const { login } = useUserContext();
    const [values, setValues] = useState({ email: "", password: "" });


    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevState) => {
            return {
                ...prevState, [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await login(values);
            return result;
        } catch (error) {
            console.error("Login error:", error);
        }

    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <h2 className="text-center mb-4">Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Login
                        </Button>

                        <div className="text-center">
                            Don’t have an account? <Link to="/auth/register">Register</Link>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;