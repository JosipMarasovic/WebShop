import Header from "../compoments/Header/Header";
import Footer from "../compoments/Footer/Footer";
import { Outlet } from "react-router-dom";


 function AppWrapperComponent (){

    return(

        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
 }

 export default AppWrapperComponent