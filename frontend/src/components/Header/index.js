import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="db dt-l w-100 border-box pa3 ph3 ph7-l">
          <Link
            className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
            to="/"
            title="Início"
          >
            <img
              src="https://http2.mlstatic.com/letras-caixa-logo-super-facil-espessura-25-cm-D_NQ_NP_979107-MLB27571828288_062018-F.jpg"
              className="dib w5 h3"
              alt="Super fácil carros e motos Ituiutaba"
            />
          </Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <Link
              className="link dim dark-gray f6 f5-l dib mr3 mr4-l ba b--black pa2"
              to="/hatch"
              title="Categoria HATCH"
            >
              HATCH
            </Link>
            <Link
              className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
              to="/sedan"
              title="Categoria SEDAN"
            >
              SEDAN
            </Link>
            <Link
              className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
              to="/suv"
              title="Categoria SUV"
            >
              SUV
            </Link>
            <Link
              className="link dim dark-gray f6 f5-l dib"
              to="/pick-up"
              title="Categoria PICK-UP"
            >
              PICK-UP
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
