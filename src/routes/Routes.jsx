import { useRoutes } from 'react-router-dom';
import { DefaultLayout } from '../components/Layout';
import NotFound from '../pages/NotFound';
import { publishRoutes } from './PublishRoutes';
import { newsDetailRoutes } from './NewsDetailRoutes';
import { productDetailRoutes } from './ProductDetailRoutes';
import { Outlet } from 'react-router-dom';
export default function Routes() {
    const routes = [
        {
            path: '/',
            element: <DefaultLayout />,
            children: [
                ...publishRoutes,
                ...productDetailRoutes,
                ...newsDetailRoutes,
                { path: '*', element: <NotFound title="Not found" /> },
            ],
        },
    ];
    return useRoutes(routes);
}
