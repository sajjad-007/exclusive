import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/about/About";
import Homepage from "./pages/home/Index";
import RootLayOut from "./layout/RootLayOut";
import Contactpage from "./pages/contact/Index";
import SignuPage from "./pages/signup/Index";
import ProductPage from "./pages/Product/Index";
import ProductDetails from "./pages/ProductDetails/Index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayOut/>}>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/productDetails" element={<ProductPage/>}/>
        <Route path="/productDetails/:id" element={<ProductDetails/>}/>
        <Route path="/signup" element={<SignuPage/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
