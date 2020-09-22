import React from 'react';
import * as actionTypes from '../reducers/actions';
import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    console.log(counter);

    const increment = () => {
        dispatch({ type: actionTypes.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: actionTypes.DECREMENT })
    }

    return ( 
        <Container>
            <Row>
                <Col><h1>{counter}</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={increment} size="lg">+</Button>
                    <Button onClick={decrement} size="lg">-</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Main;