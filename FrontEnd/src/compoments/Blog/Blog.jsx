import React, {useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogPreview from './BlogPreview';
import BlogDetail from './BlogDetail';
import { fetchAllBlogs } from  "../../apicalls/api"

function Blog() {


    const [blogPosts, setBlogPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        async function loadBlogs() {
            const blogs = await fetchAllBlogs();
            console.log('Fetched blogs:', blogs); // Debug log
            setBlogPosts(blogs);
            if (blogs.length > 0) {
                setSelectedPost(blogs[0]);
            }
        }

        loadBlogs();
    }, []);


    function ChangeBlogPosts(post){
        setSelectedPost(post) 
    }

    return (
        <Container className='mt-5'>
            <Row>
                <h2 className='text-center'>Cool Shoes Blog</h2>
                <Col sm={3} className="my-5">
                    <BlogPreview blogPosts={blogPosts} ChangeBlogPosts={ChangeBlogPosts}/>
                </Col>
                <Col sm={9} className="my-5">
                    <BlogDetail selectedPost={selectedPost}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;
