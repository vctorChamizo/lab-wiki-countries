import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { CountryDetail } from "./components/CountryDetail";

import countries from "../public/data/countries.json";

const listCountries = countries.map(c => {
  const country = {};
  country.name = c.name.common;
  country.capital = c.capital[0];
  country.code = c.cca3;
  country.area = c.area;
  country.borders = c.borders;
  country.flag = c.flag;
  country.active = false;

  return country;
});

export const App = () => {
  const [list] = useState(listCountries);

  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={() => <List countries={list} />} />
          <Route
            path="/:code"
            render={({ match }) => {
              const codeCountry = match.params.code;
              return (
                <div className="row">
                  <List countries={list} />
                  <CountryDetail code={codeCountry} countries={list} />
                </div>
              );
            }}
          ></Route>
        </Switch>
      </main>
    </>
  );
};
