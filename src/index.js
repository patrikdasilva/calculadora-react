import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <h1 class="calc">Calculadora</h1>
     <Calculator />
  </div>
  ,document.getElementById('root')
);
reportWebVitals();
