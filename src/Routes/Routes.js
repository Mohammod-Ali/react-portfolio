import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import BikeResell from "../Pages/MyProjects/BikeResell";
import CloudKitchen from "../Pages/MyProjects/CloudKitchen";
import WebHunt from "../Pages/MyProjects/WebHunt";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/bikeresell',
                element: <BikeResell></BikeResell>
            },
            {
                path: '/webhunt',
                element: <WebHunt></WebHunt>
            },
            {
                path: '/cloudkitchen',
                element: <CloudKitchen></CloudKitchen>
            }
        ]
    }
])

export default router;