import countriesData from './countries.json'
// import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {

  const [countries, setCountries] = useState(countriesData)






  return (
    <div className="App">
      <Navbar />

      <div className="row">
        <CountriesList countries={countries} />
        <Routes>
          <Route path="/countries/:alpha3Code" element={< CountryDetails countries={countries} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
