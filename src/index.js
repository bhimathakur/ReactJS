import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Provider from 'react-redux';
import {store} from './utilities/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
//import ErrorBoundry
import ErrorHandler from './components/ErrorHandler';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  /*
  * Components:
      Header
      Sidebar
      MainContainer(Body)
        ButtonLists
        VideoContianer
          Video



  */
          <ErrorBoundary FallbackComponent={'ErrorHandler'}>

  <React.StrictMode>
        <Provider store={store}> 
    
        <App />

      </Provider>

  </React.StrictMode>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
