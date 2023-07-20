import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const title = React.createElement("h1",
{ style: { color: '#999', fontSize: '19px' } },
"Solar system planets");

const planets = (
  <ul className="planets-list">
    <li>Mercury</li>
    <li>Venus</li>
    <li>Earth</li>
    <li>Mars</li>
    <li>Jupiter</li>
    <li>Saturn</li>
    <li>Uranus</li>
    <li>Neptune</li>
  </ul>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // To avoid unnecessary HTML nodes and achieve faster rendering (Fragment Component) /David
  <>
  {title}
  {planets}
  </>
);
