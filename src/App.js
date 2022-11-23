import './App.css';

import {BrowserRouter as router, Route, Link, ROutes} from "react-router-dom"

import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
  <div className='App'>
    <AppRoutes/> 
  </div>
  );
}

export default App;
