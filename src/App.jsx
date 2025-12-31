import './index.css'
import './app.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Spinner from "./components/Spinner.jsx";

function App() {

    const navigation = useNavigation();
    let content;

    // cannot write if-else statement inside JSX
    if (navigation.state === "loading") {
        content = <Spinner message="Loading..."/>;
    } else if (navigation.state === "submitting") {
        content = <Spinner message="Submitting..."/>;
    } else {
        content = <Outlet/>;
    }

    return (
        <div className="bg-white dark:bg-gray-800">
            <Header/>
            {content}
            <Footer/>
        </div>

    );
}

export default App
