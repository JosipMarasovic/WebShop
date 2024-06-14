
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import AppWrapperComponent from './AppWrapper/AppWrapperCompomenet';
import About from './compoments/About/About.jsx';
import Blog from './compoments/Blog/Blog.jsx'
import Home from './compoments/Home/Home.jsx';
import Basket from './compoments/Basket/Basket.jsx';
import AllItems from './compoments/ItemsAll/AllItems.jsx';
import ProductDetail from './compoments/Popular/ProductDetail.jsx';
import Popular from './compoments/Popular/Popular.jsx';
import PaymentDelivery from './compoments/Payment-delivery/PaymentDelivery.jsx';
import { AppProvider } from './Context/AppContext.jsx';
import PopularCategories from './compoments/Popular/PopularCategories.jsx';



function App() {
 
  return (
    <>
    <AppProvider>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<AppWrapperComponent/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/items/:category' element={<AllItems/>}/>
        <Route path='/popular/*' element={<Popular/>}/>
        <Route path="/popular/category/:category" element={<PopularCategories />} /> 
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/productDetail/:id' element={<ProductDetail/>}/>
        <Route path='/payment-delivery' element={<PaymentDelivery/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
   
    
    </>
  )
}
export default App
