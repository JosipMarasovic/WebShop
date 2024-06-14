import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleCardDisplay from './SingleCardDisplay';
import './blog.css';

function BlogPreview({ blogPosts, ChangeBlogPosts }) {
    console.log('Blog posts in BlogPreview:', blogPosts);
    return (
        <Container className="blog-container mb-5">
            <h3 className="text-center mt-5">Cool Shoes Blog</h3>
            <Row className="justify-content-center pt-5 pb-5 mb-5">
                {blogPosts.map(post => (
                    <Col key={post.blogId} className="mb-4">
                        <SingleCardDisplay
                            id={post.blogId}
                            title={post.title}
                            content={post.content.substring(0, 100) + '...'}
                            image={post.images}
                            onClick={() => ChangeBlogPosts(post)}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BlogPreview;
