import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CreateFood = ({ open, close }) => {

    const [values, setValues] = useState({ name: "", description: "", price: 0, is_active: false });
    const [image, setImage] = useState(null);

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setValues((prevState) => {
            return { ...prevState, [name]: name === "is_active" ? checked : value }
        })
    }

    const handleFileChange = (event) => {
        const image = event.target.files[0];
        setImage(image);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("values---", values);
    }

    return (
        <>
            <Modal show={open} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Form.Group className="mb-3" controlId="exampleForm.name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.description"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.price"
                        >
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload file example</Form.Label>
                                <Form.Control type="file" name="image" onChange={handleFileChange} />
                            </Form.Group>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.isActive"
                        >
                            <Form.Label>Is Active</Form.Label>
                            <Form.Check
                                type="switch"
                                id="isActive"
                                name="is_active"
                                value={values.is_active}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Form.Group>

                        <Button type="submit">Crete</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateFood;