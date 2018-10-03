import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import { Router } from './router';

const elm = document.getElementById('app');

function renderer() {
    if (!elm) return;

    const element = (
        <Provider store={store}>
            <BrowserRouter>{Router}</BrowserRouter>
        </Provider>
    );

    render(element, elm);

}

renderer();

if (module.hot) module.hot.accept('./client', renderer);
