import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';

class FilterBy extends Component {
  render() {
    return (
      <Layout>
        <nav role="navigation">
          <p className="dib pr2">
            <strong>Filtrar por:</strong>
          </p>
          <ul className="list ma0 dib pl0">
            <li className="dib mr1 mb2">
              <Link
                className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20 bg-black-80 white"
                filter="all"
                title="Remove os filtros. Mostra todas categorias"
                to="/"
              >
                TODAS
              </Link>
            </li>
            <li className="dib mr1 mb2">
              <Link
                className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20"
                filter="btc"
                title="Filtra por categoria HATCH"
                to="/hatch"
              >
                HATCH
              </Link>
            </li>
            <li className="dib mr1 mb2">
              <Link
                className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20"
                filter="eth"
                title="Filtra por categoria SEDAN"
                to="/sedan"
              >
                SEDAN
              </Link>
            </li>
            <li className="dib mr1 mb2">
              <Link
                className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20"
                filter="xrp"
                title="Filtra por categoria SUV"
                to="/suv"
              >
                SUV
              </Link>
            </li>
            <li className="dib mr1 mb2">
              <Link
                className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20"
                filter="ltc"
                title="Filtra por categoria PICK-UP"
                to="/pick-up"
              >
                PICK-UP
              </Link>
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}

export default FilterBy;
