import React from 'react'
import Product from './product'
import {Container, Row} from "react-bootstrap";
import { withAuthorization, AuthUserContext } from '../../components/Session';
import axios from 'axios'

const INITIAL_STATE = {
    products: []
};

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE}
    }

    getProducts = async () => {
        try {
            const result = await axios.get(
                process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_SERVER_PORT + '/api/' + process.env.REACT_APP_SERVER_API_VERSION + '/products'
            );
            const products = result.data.products;

            let productList = products.map((product) => {
                return <Product name={product.name} description={product.description} price={product.price} productId={product.id} />
            });

            productList.forEach((product) => {
                this.setState({products: product}) ;
            })

        } catch (error) {
            console.log(error);
        }
    };

    orderProduct = async (productId) => {
        const response = await axios.post('/orders/create', {
            product_id: productId,
            quantity: 1
        });

        console.log(response.data.order);
    };

    render () {
        const {products} = this.state;
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <Container>
                        <h1>Hello {authUser.displayName}</h1>
                        <h2 className="mt-5 mb-5">Product List</h2>
                        <Row>
                            {products}
                        </Row>
                    </Container>
                )}
            </AuthUserContext.Consumer>
        )
    }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);