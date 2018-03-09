import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders bio name', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  setTimeout(() => {
  	const name = "Keith Laidlaw"
  	expect(div.outerHTML).toEqual(expect.stringContaining(name));
  	done();
  }, 3000);
});

