import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App, AppMachine} from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App machine={new AppMachine()}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
