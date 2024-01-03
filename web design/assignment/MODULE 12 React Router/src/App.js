import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loader from './Loader';


const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Home'));
    }, 1000);
  });
});
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Home/>
      </Suspense>
    </div>
  );
}

export default App;