import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getProductById } from '../../apicalls/api';
import AppContext from '../../Context/AppContext';

function ProductDetail() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const product = await getProductById(id); 
                setProduct(product);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const { addItemToBasket } = useContext(AppContext);

    const handleAddToCart = () => {
        addItemToBasket(product);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    const handlePrevImage = () => {
        setCurrentImageIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => Math.min(prevIndex + 1, product.images.length));
    };

    const getCurrentImageUrl = () => {
        if (currentImageIndex === 0) {
            return product.thumbnail;
        }
        return product.images[currentImageIndex - 1].imageUrl;
    };

    return (
        <Card className="mt-5 mb-5 pt-5 pb-5 container-padding" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '10px' }}>
            <Button 
                className='custom-button' 
                onClick={handlePrevImage} 
                style={{ position: 'absolute', top: '30%', marginLeft:'300px', left: '20px', transform: 'translateY(-50%)', paddingLeft: '20px', paddingRight: '20px' }}>
                PREV
            </Button>
            <Card.Img
                variant="top"
                src={getCurrentImageUrl()}
                style={{ width: '500px', height: '400px', border: '2px solid black' }}
            />
            <Button 
                className='custom-button' 
                onClick={handleNextImage} 
                style={{ position: 'absolute', top: '30%',marginRight:'300px', right: '20px', transform: 'translateY(-50%)', paddingLeft: '20px', paddingRight: '20px' }}>
                NEXT
            </Button>
            <Card.Body>
                <Card.Title><strong>Name</strong>: {product.title}</Card.Title>
                <Card.Text><strong>Description</strong>: {product.description}</Card.Text>
                <Card.Text><strong>Price</strong>: ${product.price}</Card.Text>
                <Card.Text><strong>Discount</strong>: {product.discountPercentage}%</Card.Text>
                <Card.Text><strong>Stock</strong>: {product.quantity}</Card.Text>
                <Button className='custom-button m-3 w-100 h-100 py-3 px-5' onClick={handleAddToCart}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductDetail;
