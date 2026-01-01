import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Contact, {submitForm} from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import Home, {productLoader} from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import {CartContext} from "./context/CartContext.jsx";

const routeDefinitions = createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<ErrorPage/>}>
        <Route index element={<Home/>} loader={productLoader}/>
        <Route path="/home" element={<Home/>} loader={productLoader}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} action={submitForm}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

const initialCartContext = {
    cart: [],
    addToCart: () => {
    },
    removeFromCart: () => {
    },
    setCart: () => {
    },
    totalQuantity: 0
};
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartContext value={initialCartContext}>
            <RouterProvider router={appRouter}></RouterProvider>
        </CartContext>
    </StrictMode>,
)
