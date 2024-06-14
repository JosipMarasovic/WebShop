
import React , { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';

function ProductCard({ product }) {

    const {addItemToBasket} = useContext(AppContext)

    const handleAddToCart = () => {
        addItemToBasket(product)
    }

    return (
        <Card style={{ height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',paddingTop:'20px',paddingBottom:'20px', margin:'10px' }}>
            <Card.Img 
                variant="top" 
                src={product.thumbnail} 
                style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid black' ,marginTop: '20px' }} 
            />
            <Card.Body>
                <Card.Title><strong>Name:</strong>  {product.title}</Card.Title>
                <Card.Text> <strong>Description:</strong> {product.description}</Card.Text>
                <Card.Text> <strong>Price: $</strong> <strong>{product.price}</strong></Card.Text>
                <Button className='custom-button m-3' onClick={handleAddToCart}>Add to Cart</Button>    
                <Link to={`/productDetail/${product.productId}`} className="btn custom-button">Product Detail</Link>

          
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
