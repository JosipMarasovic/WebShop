import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPopularCategoryProducts } from "../../apicalls/api";

function PopularCategories() {


    const { category: categoryId } = useParams();
    const [popularProducts, setPopularProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await getPopularCategoryProducts(categoryId);
                setPopularProducts(products);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categoryId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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

export default PopularCategories;
