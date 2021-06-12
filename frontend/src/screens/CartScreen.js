import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  console.log(qty);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>CART</div>;
};

export default CartScreen;

{
  cartItems.map((item) => (
    <ListGroup.Item key={item.product}>
      <Row>
        <Col md={2}>
          <Image scr={item.Image} alt={item.name} fluid rounded />
        </Col>
      </Row>
    </ListGroup.Item>
  ));
}

console.log(dispatch);
const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
console.log(cartItems);

<Row>
  <Col md={8}>
    <h1>Shopping cart</h1>
    {cartItems.length === 0 ? (
      <Message>
        Your cart is empty <Link to='/'>Go Back</Link>
      </Message>
    ) : (
      <ListGroup variant='flush'></ListGroup>
    )}
  </Col>
  <Col md={2}></Col>
  <Col md={2}></Col>
</Row>;
