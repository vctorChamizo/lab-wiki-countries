import React from "react";

import { Link } from "react-router-dom";

export const CountryDetail = ({ code, countries }) => {
  const getCountry = code => countries.find(c => c.code == code);

  const country = getCountry(code);

  return (
    <div className="col-7 country-detail">
      <h1>
        {country.name} {country.flag}
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((e, i) => {
                  const border = getCountry(e);
                  return (
                    <li key={i}>
                      <Link to={`/${border.code}`}>{border.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
