import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('passes 3', () => {});

it('renders without crashing', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  setTimeout(done, 3000);
});
