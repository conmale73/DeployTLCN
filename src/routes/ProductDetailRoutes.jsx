import { lazy, Suspense } from 'react';
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
import Loading from '../components/Loading';
import { ProductDetailProvider } from '../context/ProductDetailContext';
const urls = [
    'clothing/:productSlug',
    'shoes/:productSlug',
    'accessories/:productSlug',
    'watches/:productSlug',
    'gifts/:productSlug',
    'grooming/:productSlug',
    
];

export const productDetailRoutes = urls.map((url) => ({
    path: url,
    element: (
        <Suspense fallback={<Loading />}>
            <ProductDetailProvider>
                <ProductDetail />
            </ProductDetailProvider>
        </Suspense>
    ),
}));
