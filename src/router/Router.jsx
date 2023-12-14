import {createBrowserRouter} from "react-router-dom";
import Error404 from "../components/pages/Error404.jsx";
import Products from "../components/pages/Products.jsx";
import App from "../components/templates/App.jsx";
import Home from "../components/pages/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/productos",
                element: <Products />,
            }
        ]
    },

]);

export default router;
