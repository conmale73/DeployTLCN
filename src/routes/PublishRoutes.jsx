import { lazy, Suspense } from 'react';
import Loading from '~/components/Loading';
const Home = lazy(() => import('../pages/Home'));
const Clothing = lazy(() => import('../pages/Clothing'));
const Shoes = lazy(() => import('../pages/Shoes'));
const Accessories = lazy(() => import('../pages/Accessories'));
const Watches = lazy(() => import('../pages/Watches'));
const Gifts = lazy(() => import('../pages/Gifts'));
const Grooming = lazy(() => import('../pages/Grooming'));
const Login = lazy(() => import('../pages/Authentication/Login'));
const Profile = lazy(() => import('../pages/Authentication/Profile'));
const Search = lazy(() => import('../pages/Search'));
const ShoppingBag = lazy(() => import('../pages/ShoppingBag'));
const Authentication = lazy(() => import('../pages/Authentication'));

export const publishRoutes = [
    {
        index: true,
        element: (
            <Suspense fallback={<Loading />}>
                <Home title="MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'clothing',
        element: (
            <Suspense fallback={<Loading />}>
                <Clothing title="Men's Designer Clothes | Design Menswear | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'shoes',
        element: (
            <Suspense fallback={<Loading />}>
                <Shoes title="Men's Designer Shoes | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'accessories',
        element: (
            <Suspense fallback={<Loading />}>
                <Accessories title="Men's Designer Accessories | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'watches',
        element: (
            <Suspense fallback={<Loading />}>
                <Watches title="Men's Luxury Watches | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'gifts',
        element: (
            <Suspense fallback={<Loading />}>
                <Gifts title="Luxury Designer Gifts | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'grooming',
        element: (
            <Suspense fallback={<Loading />}>
                <Grooming title="Skincare, Shaving and Fragance | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'account',
        element: (
            <Suspense fallback={<Loading />}>
                <Authentication title="MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'login',
        element: (
            <Suspense fallback={<Loading />}>
                <Login title="Login | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'profile',
        element: (
            <Suspense fallback={<Loading />}>
                <Profile title="Profile | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'search',
        element: (
            <Suspense fallback={<Loading />}>
                <Search title="Search | MR PORTER" />
            </Suspense>
        ),
    },
    {
        path: 'shopping-bag',
        element: (
            <Suspense fallback={<Loading />}>
                <ShoppingBag title="Shopping Bag | MR PORTER" />
            </Suspense>
        ),
    },

];