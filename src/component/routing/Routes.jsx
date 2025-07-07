
import { createBrowserRouter } from 'react-router-dom'
import Home from '../../Pages/home/Home'
import About from '../../Pages/about/About'
import AppLayout from '../PageLayout/AppLayout'
import ErrorPage from '../Error/ErrorPage'
import Contact from '../../Pages/contact/Contact'
import Countries from '../../Pages/countries/Countries'
import CountryDetails from '../Country/CountryDetails'


const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "countries",
                element: <Countries/>
            },
            {
                path: "country/:code",
                element: <CountryDetails/>
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            

        ]
    }

])

export default routes