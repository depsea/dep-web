import * as React from 'react';
import { renderRoutes } from 'react-router-config';

export const App: React.SFC<any> = ({ route }) => {
    return renderRoutes(route.routes);
};
