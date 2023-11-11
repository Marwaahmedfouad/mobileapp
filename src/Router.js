import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.js'
import Products from './pages/Products.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import Tsh from './pages/Tsh.js'
import Settings from './pages/Settings.js'
import Balagat from './pages/Balagat.js'



import Root from './pages/Root.js'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
              
                {
                    path: "/products",
                    element: <Products />
                },
                {
                    path: "/Projects",
                    element: <Projects />
                },
                {
                    path: "/Contact",
                    element: <Contact />
                }
                ,
                {
                    path: "/Settings",
                    element: <Settings />,
                }
                ,
                {
                    path: "/Tsh",
                    element: <Tsh />
                },
                {
                    path: "/",
                    element: <Home />,
                    index: true
                },
                {
                    path: "/Balagat",
                    element: <Balagat />,
                },
                




               
            ]
        }
    ]
);

export default router;
