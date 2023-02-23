
import React from 'react'
// import countriesData from '../countries.json'
import { useParams, Link } from "react-router-dom";


const CountryDetails = ({ countries }) => {



  const { alpha3Code } = useParams()

  const detailsCountry = (() => {
    return countries.filter(country => country.alpha3Code === alpha3Code)
  })


  const { name, capital, area, borders } = detailsCountry;


  return (
    <div>
      <div className="col-7">




        <h1>{name.common}</h1><table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {borders.map(border => {
                    return (
                      <li key={border} >{border}</li>
                    )
                  })
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CountryDetails

