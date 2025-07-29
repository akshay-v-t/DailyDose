import App from "../App";
import Account from "../pages/Account";
import Analytics from "../pages/Analytics";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";
import MyHealth from "../pages/MyHealth";
import MyMeds from "../pages/MyMeds";
import Prescriptions from "../pages/Prescriptions";
import Settings from "../pages/Settings";

const routes = [
    {
       
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'my-health',
                element: <MyHealth/>
            },
            {
                path: 'settings',
                element: <Settings/>
            },
            {
                path: 'my-meds',
                element: <MyMeds/>
            },
            {
                path: 'prescriptions',
                element: <Prescriptions/>
            },
            {
                path: 'analytics',
                element: <Analytics/>
            },
            {
                path: 'inventory',
                element: <Inventory/>
            },
            {
                path: 'account',
                element: <Account/>
            },
            
        ]

    },
    {
        path: '/login',
        element: <div> Dashboard </div>
    },
    {
        path: '*',
        element: <div> This page does not exist. </div>
    }

]


export default routes;