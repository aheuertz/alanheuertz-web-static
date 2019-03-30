import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown, faUser } from '@fortawesome/free-solid-svg-icons'
import App from './App';
import * as serviceWorker from './serviceWorker';

library.add(faSort, faSortUp, faSortDown, faUser);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
