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
import Categories from "./pages/CategoriesPage";
import CategoryDetail from "./pages/CategoryDetailPage";
import ProductDetail from "./pages/ProductDetailPage";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import DeliveryDetails from "./pages/DeliveryDetailsPage";

// Import des nouvelles pages de menu
import Sandwichs from "./pages/Sandwichs";
import Tacos from "./pages/Tacos";
import Burgers from "./pages/Burgers";
import PlatsChauds from "./pages/PlatsChauds";
import Pizzas from "./pages/Pizzas";
import Pates from "./pages/Pates";
import Salades from "./pages/Salades";
import MenusEnfants from "./pages/MenusEnfants";
import Boissons from "./pages/Boisssons";
import Supplements from "./pages/Supplements";
import ValidationCommande from "./pages/ValidationCommande";
import InfosClient from "./pages/InfosClient";
import CommandeEnCours from "./pages/CommandeEnCours";

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

        {/* Routes des catégories */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Routes du menu */}
        <Route path="/sandwichs" element={<Sandwichs />} />
        <Route path="/tacos" element={<Tacos />} />
        <Route path="/burgers" element={<Burgers />} />
        <Route path="/plats" element={<PlatsChauds />} />
        <Route path="/pizzas" element={<Pizzas />} />
        <Route path="/pates" element={<Pates />} />
        <Route path="/salades" element={<Salades />} />
        <Route path="/menus" element={<MenusEnfants />} />
        <Route path="/boissons" element={<Boissons />} />
        <Route path="/supplements" element={<Supplements />} />

        {/* Routes de commande */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery" element={<DeliveryDetails />} />
        <Route path="/validation-commande" element={<ValidationCommande />} />
        <Route path="/infos-client" element={<InfosClient />} />
        <Route path="/commande-en-cours" element={<CommandeEnCours />} />

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
