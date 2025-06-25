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
import LogIn from "./pages/Login/LogIn";
import WishList from "./pages/wishList/Index";
import AddToCart from "./pages/AddToCart/AddToCart";
import MyAccount from "./pages/account/MyAccount";
import Error from "./pages/Error/Error";
import CheckOut from "./pages/Checkout/CheckOut";
import ToastNotifier from "./component/utility/Toastify.jsx";
import VerifyOtp from "./pages/verifyOtp/VerifyOtp.jsx";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword.jsx";
import ChangePassword from "./pages/changePassword/ChangePassword.jsx";
import Success from "./pages/paymentpages/Success.jsx";
import Failed from "./pages/paymentpages/Failed.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayOut />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/productDetails" element={<ProductPage />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/signup" element={<SignuPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        <Route path="/verifyOtp/:email" element={<VerifyOtp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Failed />} />
        <Route path={"*"} element={<Error />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastNotifier />
    </>
  );
}

export default App;
