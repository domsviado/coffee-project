import React from 'react'
import {ListGroup} from 'react-bootstrap'
import ProductOrdered from "./product-ordered";
function Orders () {
    return (
        <ListGroup>
            <ProductOrdered/>
            <ProductOrdered/>
            <ProductOrdered/>
            <ProductOrdered/>
            <ProductOrdered/>
        </ListGroup>
    )
}

export default Orders