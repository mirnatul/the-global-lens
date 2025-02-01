import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Politics from "../pages/Politics";
import Business from "../pages/Business";
import Technology from "../pages/Technology";
import Science from "../pages/Science";
import Health from "../pages/Health";
import Travel from "../pages/Travel";
import Entertainment from "../pages/Entertainment";
import Fashion from "../pages/Fashion";
import LogIn from "../components/AuthenticationPage/LogIn";
import Register from "../components/AuthenticationPage/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/politics',
                element: <Politics></Politics>
            },
            {
                path: '/business',
                element: <Business></Business>
            },
            {
                path: '/technology',
                element: <Technology></Technology>
            },
            {
                path: '/science',
                element: <Science></Science>
            },
            {
                path: '/health',
                element: <Health></Health>
            },
            {
                path: '/travel',
                element: <Travel></Travel>
            },
            {
                path: '/entertainment',
                element: <Entertainment></Entertainment>
            },
            {
                path: '/fashion',
                element: <Fashion></Fashion>
            },
        ]
    },
    {
        path: '/login',
        element: <LogIn></LogIn>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
]);
