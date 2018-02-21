import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('passes 3', () => {});

xit('renders bio name', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  setTimeout(() => {
  	const name = "Keith Laidlaw"
  	expect(div.outerHTML).toEqual(expect.stringContaining());
  	done();
  }, 3000);
});

window.fetch = () => Promise.resolve({
	json: () => Promise.resolve(),
});

it('renders bio name with stubbed fetch', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  console.log(div.outerHTML);
});
