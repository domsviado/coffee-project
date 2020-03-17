import React from 'react'
import {ListGroup} from 'react-bootstrap'
import ProductOrdered from "./product-ordered";
function Orders () {
    return (
        <ListGroup>
            <h2 className="mt-5 mb-5">Orders</h2>
            <ProductOrdered/>
            <ProductOrdered/>
            <ProductOrdered/>
            <ProductOrdered/>
            <ProductOrdered/>
        </ListGroup>
    )
}

export default Orders