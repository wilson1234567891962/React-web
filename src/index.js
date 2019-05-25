/**
 * 
 * 
 const element=document.createElement('h1');
element.innerText='Hello, Prueba de concepto';

const container=document.getElementById('app');
container.appendChild(element);
*/

/**
import React from 'react';
import ReactDOM from 'react-dom';

const element=<h1>Prueba</h1>;
const container=document.getElementById('app');

// ReactDOM.render(_que_queremos_renderizar, donde_queremos_renderizar)
ReactDOM.render(element,container);

 */

 /**  Esta pcion es crear elementos con createElement
 import React from 'react';
 import ReactDOM from 'react-dom';

 const element=React.createElement(
     'a',
     {href:'https://www.google.com'},
     'Prueba de concepto'
     );
 const container=document.getElementById('app');
 ReactDOM.render(element,container);
*/

/**   
 
  // Esta pcion es crear elementos con jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
 
  const name='Paulo';
  const jsx=<h1>Hola {name}</h1>
  const container=document.getElementById('app');
  ReactDOM.render(jsx, container);

  */


    // Esta opcion es segunda crear elementos con jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import BadgeNew from './pages/BadgeNew.js';
    import Badges from './pages/Badges.js';
    import './global.css';
    import 'bootstrap/dist/css/bootstrap.css';

    var container=document.getElementById('app');
    ReactDOM.render(<Badges/>, container);
  
    