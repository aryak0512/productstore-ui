import './index.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {


    return (
        <div className="bg-white dark:bg-gray-800">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    );
}

export default App
