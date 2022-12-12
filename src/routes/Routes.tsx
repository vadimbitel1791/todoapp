import { createElement } from 'react';
import { BrowserRouter, Route, Routes as BrowerRoutes } from 'react-router-dom';
import { PageLayout } from '../components/page-layout/PageLayout';
import { routes } from './';

export const Routes = () => (
    <BrowserRouter>
        <PageLayout>
            <BrowerRoutes>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={createElement(route.component)}
                    />
                ))}
            </BrowerRoutes>
        </PageLayout>
    </BrowserRouter>
);
