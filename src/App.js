import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Watch from './components/Watch';
import Layout from './components/Layout';
import MainContainer from './components/MainContainer';
import SearchResult from './components/SearchResult';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorHandler from './components/ErrorHandler';
function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorHandler />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: 'watch',
          element: <Watch />,
        },
        {
          path: 'search-result',
          element: <SearchResult />
        }
      ]

    }
  ])

  return (
    <RouterProvider router={appRouter} >
      <Layout />
      </RouterProvider>
  );
}

export default App;
