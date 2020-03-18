import React from 'react'
import {Button, Col, ListGroup, Row} from "react-bootstrap";

function ProductItem() {
    return (
        <ListGroup.Item>
            <Row>
                <Col sm lg={4}>Espresso</Col>
                <Col sm lg={2}>P200,00</Col>
                <Col sm lg={2}>100 pcs</Col>
                <Col sm lg={2}><Button className="btn-secondary">Update</Button></Col>
                <Col sm lg={2}><Button className="btn-danger">Remove</Button></Col>
            </Row>
        </ListGroup.Item>
    )
}

export default ProductItem