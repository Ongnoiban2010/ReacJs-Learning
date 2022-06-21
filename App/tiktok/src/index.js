import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseReducer from './UseReducer';
import reportWebVitals from './reportWebVitals';

// Fake comments
// phát đi một event tùy ý
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail:  `Nooij dung comment của leson ${id}`
      })
    )
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <UseReducer />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
