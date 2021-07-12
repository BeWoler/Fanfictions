import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const store = new Store();

export const Context = createContext({store})

ReactDOM.render(
  <Context.Provider value={{store}}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
