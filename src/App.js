import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/HomePage";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Plats from "./pages/Plats";
import Boissons from "./pages/Boisssons";
import Supplements from "./pages/Supplements";
import Categories from "./pages/CategoriesPage";
import CategoryDetail from "./pages/CategoryDetailPage";
import ProductDetail from "./pages/ProductDetailPage";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import DeliveryDetails from "./pages/DeliveryDetailsPage";
// import QRCodePage from "./pages/QRCodePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <ScrollRestoration />
    <div className="flex-grow">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<DeliveryDetails />} />
        <Route path="/plats" element={<Plats />} />
        <Route path="/boissons" element={<Boissons />} />
        <Route path="/supplements" element={<Supplements />} />

        {/* <Route path="/qr" element={<QRCodePage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
