import React from 'react'
import {ListGroup, Button, Container} from "react-bootstrap";
import ProductItem from "./product";
function ProductList() {
    return (
        <Container>
            <h2 className="mt-5 mb-5">Products</h2>
            <Button className="mb-2">Create Product</Button>
            <ListGroup>
                <ProductItem/>
            </ListGroup>
        </Container>
    )
}

export default ProductList