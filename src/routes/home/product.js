import React from "react";
import {Col, Button, Image} from 'react-bootstrap'
import ProductImage from '../../components/assets/images/espresso.jpg'
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: ''
        }
    }


    render () {
        return (
            <Col xs md lg={3} className="mb-2">
                <Image src={ProductImage} thumbnail/>
                <p>{this.props.name}</p>
                <p>{this.props.price}</p>
                <Button /*data-product-id={this.props.id} onclick={orderProduct(this.props.id)}*/>Order</Button>
            </Col>
        )
    }

}

export default Product