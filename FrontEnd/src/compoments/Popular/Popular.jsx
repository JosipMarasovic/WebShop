import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from "react";

import { getPopularProducts} from  "../../apicalls/api"

function Popular() {


    const [popularProducts, setpopularProducts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const products = await getPopularProducts();
            setpopularProducts(products);
        };

        fetchData();
    }, []);

    return (
        <Container className={"mb-5 mt-5 container-padding"}> 
            <Row className="justify-content-center">
                <Col xs={12} className="text-center mt-5">
                    <h2><em>Popular</em></h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5 mb-5">
                {popularProducts.map((product, index) => (
                    <Col key={index} xs={12} md={6} className="mb-3">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Popular;
