// react
import React from 'react';

// third-party
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// application
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import store from './store';

// styles
import 'slick-carousel/slick/slick.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-input-range/lib/css/index.css';
import './scss/style.scss';


ReactDOM.render((
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <Root />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
