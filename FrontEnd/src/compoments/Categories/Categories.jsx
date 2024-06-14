import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CardForCategories from "./CardForCategories";
import './categories.css';
import { getCategories } from "../../apicalls/api";

function Categories() {



    const [categories, setCategories] = useState([]);
    const thumbnails = [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2d234d2c-fb68-42df-8b4d-ce7e9b9dab02/air-max-dn-shoes-q51Wwn.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/31833ea1-eba0-4a38-8e10-cc9e8ab4ce15/air-jordan-1-low-se-shoes-lPZC9M.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f438dd0f-b324-4a5d-b4ba-08ad915e263e/acg-torre-mid-waterproof-shoes-n8Kt54.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/078906e5-9d8f-44cd-ab0d-4e5f3234757a/air-zoom-tr-1-workout-shoes-cjLdcP.png",
        "https://d2ob0iztsaxy5v.cloudfront.net/product/313799/3137999750_zm.jpg",
        "https://i8.amplience.net/i/fitflop/IQUSHION-CHARMS-SET-PACKAGE-ELECTRIC-YELLOW_GH4-A26_1.webp?v=1&w=768&$pdp-img-gallery$"
    ];

    useEffect(() => {
        const fetchData = async () => {
            const categories = await getCategories();
            setCategories(categories);
        };

        fetchData();
    }, []);

    const formattedCategories = categories.map((category, index) => {
        return {
            id: category.categoryId,
            name: category.categoryname.charAt(0).toUpperCase() + category.categoryname.slice(1),
            thumbnail: thumbnails[index] 
        };
    });
   

    return (
        <Container className={"mb-5 container-padding"}> 
            <Row className="justify-content-center">
                <Col xs={12} className="text-center mt-5">
                    <h2><em>Categories</em></h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5 mb-5">
                {formattedCategories.map((category, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-5">
                        <CardForCategories title={category.name} id={category.id} thumbnail={category.thumbnail} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Categories;
