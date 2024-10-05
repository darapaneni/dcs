import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import DcsPageLoader from './components/loader/DcsPageLoader.js';
import DcsFallbackError from './components/error-boundary/DcsFallbackError.js';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(

  <ErrorBoundary
    FallbackComponent={ DcsFallbackError }
    onReset={ () =>
    {
      // Reset the state of your app so the error doesn't happen again
    } }
    onError={ ( error, errorInfo ) =>
    {
      console.error( "Error caught by ErrorBoundary:", error, errorInfo );
    } }
  >

    <Suspense fallback={ <DcsPageLoader /> }>
      <React.StrictMode>
        <BrowserRouter>
          <App />
          {/* <Routes>
            <Route path="/" element={ <App /> }>
              <Route path="dashboard" element={ <Dashboard /> } />
            </Route>
            <Route path="/home" element={ <Home /> }>
              <Route index element={ <Login /> } />
              <Route path="signup" element={ <Signup /> } />
              <Route path="support" element={ <SupportPage /> } />
              <Route path="privacy-policy" element={ <PrivacyPolicy /> } />
              <Route path="user-profile" element={ <UserProfile /> } />

            </Route>
          </Routes> */}
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </ErrorBoundary >
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
