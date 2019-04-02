import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown, faUser, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import * as serviceWorker from './serviceWorker';
import { Footer } from './components/Footer';
import AppRouter from './AppRouter';

library.add(faSort, faSortUp, faSortDown, faUser, faExternalLinkAlt, faLinkedin, faGithub);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
