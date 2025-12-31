import './index.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
    return (
        <div className="bg-white dark:bg-gray-800">
            <Header/>
            <Home/>
            <Footer/>
        </div>

    );
}

export default App
