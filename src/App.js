import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useStore } from './store';
import { authSuccess } from './store/Auth/authActions';

function App() {
  const store = useStore(undefined)

  useEffect(() => {
    const appState = JSON.parse(localStorage.getItem('cloneSpotifyState') || '{}')
    store.dispatch(authSuccess(appState))
  }, [])
  

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
