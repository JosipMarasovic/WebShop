import Categories from "../Categories/Categories.jsx";
import Hero from "../Hero/Hero.jsx";
import NewsletterForm from "../NewsLetter/NewsLetter.jsx";
import { useEffect, useState } from "react";


function Home(){

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        <>
            <Hero/>
            <Categories/>
            <NewsletterForm/>
        </>
    );
}

export default Home;
