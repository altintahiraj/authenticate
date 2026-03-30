import { useState } from 'react';
import { useFoodContext } from '../../Context/FoodContext';
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import CreateFood from './CreateModal';

const FoodDashboard = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openCreate, setCreate] = useState(false);
    const { food } = useFoodContext();

    const handleCreate = () => {
        setCreate(!openCreate);
    }

    const handleEditOpen = () => { }
    const handleDelete = () => { }

    return (
        <Container className="mt-4">
            <Row className="mb-4 align-items-center">
                <Col>
                    <h3 className="fw-bold">Food Dashboard</h3>
                    <p className="text-muted mb-0">Manage your food items easily</p>
                </Col>
                <Col className="text-end">
                    <Button variant="success" onClick={handleCreate} className="px-4">
                        + Create
                    </Button>
                </Col>
            </Row>

            <Card className="shadow-sm border-0 rounded-4">
                <Card.Body>
                    <Table responsive hover className="align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {food?.length > 0 ? (
                                food.map((item, index) => (
                                    <tr key={index}>
                                        <td className="fw-semibold">{item.id}</td>
                                        <td>{item.name}</td>
                                        <td className="text-muted">{item.description}</td>
                                        <td className="fw-bold text-success">${item.price}</td>
                                        <td>
                                            <img
                                                src={`http://localhost:3000/food/uploads/${item.image}`}
                                                alt={item.name}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px'
                                                }}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex gap-2 justify-content-center">
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    onClick={handleEditOpen}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={handleDelete}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4 text-muted">
                                        No food items found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <CreateFood open={openCreate} close={handleCreate} />
        </Container>
    );
}

export default FoodDashboard;