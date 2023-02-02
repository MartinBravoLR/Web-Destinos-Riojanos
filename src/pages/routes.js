import { Navigate, useRoutes } from 'react-router-dom';
import NotFound from "./layouts/NotFound";
import Dashboard from "./layouts/Dashboard";
import Fetchlist from "./fetchlist/fetchlist";

const Routes = () => {
    return useRoutes([

    {
    path: '/',
    element: <Dashboard />,
    },
    {
        path: '/Destinos',
        element: <Fetchlist />,
    },
    
    {
     path: '/404',
     element: <NotFound/>
    },

    {
     path:'*',
     element: <Navigate to="/404" replace/>
    }
    ])
    }
    export default Routes;