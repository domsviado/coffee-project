import React from 'react'
import {ListGroup} from 'react-bootstrap'
import ProductOrdered from "./product-ordered";
import { withAuthorization } from '../../components/Session';

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
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Orders);

