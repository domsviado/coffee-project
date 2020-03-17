import React from 'react'
import Product from './product'
import {Container} from "react-bootstrap";

function Home() {
    return (
        <Container>
            <h2 className="mt-5 mb-5">Product List</h2>
            <Product/>
        </Container>

    )
}

export default Home