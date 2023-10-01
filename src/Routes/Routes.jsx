import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Components/Pages/Home/Home";
import ErrorPage from "../Components/Shares/ErrorPage/ErrorPage";
import LogIn from "../Components/Pages/Forms/LogIn";
import Register from "../Components/Pages/Forms/Register";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            
        ]
    }
])
export default routes;