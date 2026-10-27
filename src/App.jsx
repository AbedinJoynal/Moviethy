import { createBrowserRouter, RouterProvider } from 'react-router';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Show from './pages/Show';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            Component: MainLayout,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: 'shows',
                    element: <Show/>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;
