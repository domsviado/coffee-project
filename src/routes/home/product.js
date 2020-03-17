import React from "react";
import {Col, Button, Image} from 'react-bootstrap'
import ProductImage from '../../components/assets/images/espresso.jpg'
function Product() {
    return (
        <Col xs lg={3} className="mb-2">
            <Image src={ProductImage} thumbnail/>
            <p>Espresso</p>
            <p>P100.00</p>
            <Button>Order</Button>
        </Col>
    )
}

export default Product