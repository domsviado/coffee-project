import React from 'react'
import {ListGroup, Button, Row, Col} from "react-bootstrap";

function ProductOrdered() {
    return (
        <ListGroup.Item>
            <Row>
                <Col sm lg={3}>Espresso</Col>
                <Col sm lg={3}>x2</Col>
                <Col sm lg={3}>P200,00</Col>
                <Col sm lg={3}><Button>Cancel Order</Button></Col>
            </Row>
        </ListGroup.Item>
    )
}

export default ProductOrdered