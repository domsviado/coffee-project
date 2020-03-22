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

    componentDidMount() {
        axios.get(
            process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_SERVER_PORT + '/api/' + process.env.REACT_APP_SERVER_API_VERSION + '/products'
        )
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render () {
        const {products} = this.state;
        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <Container>
                        <h1>Hello {authUser.displayName}</h1>
                        <h2 className="mt-5 mb-5">Product List</h2>
                        <Row>
                            {products.map(product => <Product name={product.name} description={product.description} price={product.price} productId={product.id} />)}
                        </Row>
                    </Container>
                )}
            </AuthUserContext.Consumer>
        )
    }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);