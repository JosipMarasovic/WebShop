import React from 'react';
import { Container,Card } from 'react-bootstrap';
import blog from './blog.png'; 

function BlogDetail({selectedPost}) {
    if (!selectedPost) {
        return <div>Please select a blog post to read.</div>;
      }
    
   
  
    return (
        <Container className="blog-container mb-5">
            <Card className="text-center">
                <Card.Img variant="top" src={selectedPost.images || blog} />
                <Card.Body>
                    <Card.Title>{selectedPost.title}</Card.Title>
                    <Card.Text>
                        {selectedPost.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BlogDetail;
