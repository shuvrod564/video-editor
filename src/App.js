 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";

import Routings from './Components/Routings';
import Header from './Components/Layout/Header';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routings />
    </BrowserRouter>
    </>
  );
}

export default App;
