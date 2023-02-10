import { Navigate, useRoutes } from 'react-router-dom';
import NotFound from "./layouts/NotFound";
import Home from "./layouts/Home";
import Fetchlist from "./fetchlist/fetchlist";
import MapList from "./MapList/MapList";
import RouteRecom from "./RouteRecom/RouteRecom";

const Routes = () => {
        return useRoutes([

                {
                path: '/',
                element: <Home />,
                },
                {
                    path: '/Destinos',
                    element: <Fetchlist />,
                },
                {
                    path: '/Mapa',
                    element: <MapList />,
                },
                {
                    path: '/Ruta',
                    element: <RouteRecom />,
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