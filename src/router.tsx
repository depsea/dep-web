import { App } from 'components';
import { createBrowserHistory } from 'history';
import { HomePage } from 'pages';
import { ArticleDetailPage, ArticleListPage } from 'pages/article';
import { renderRoutes, RouteConfig } from 'react-router-config';

export const history = createBrowserHistory();

export interface Route extends RouteConfig {
    title?: string;
    icon?: string;
    routes?: Route[];
}

export const RouterConfig: Route[] = [
    {
        component: App,
        routes: [
            {
                path: '/',
                component: HomePage,
                title: '首页',
                exact: true,
            },
            {
                path: '/articles',
                component: ArticleListPage,
                title: '文章列表',
                exact: true,
            },
            {
                path: '/articles/:article_id',
                component: ArticleDetailPage,
                title: '文章详情',
                exact: true,
            },
        ],
    },
];

export const Router = renderRoutes(RouterConfig);
