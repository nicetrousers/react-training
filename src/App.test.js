import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('passes 3', () => {});

window.fetch = () => Promise.resolve({
	json: () => Promise.resolve({
		name: "The Bio Name",
		portrait: "portrait",
		bullets: [
			"bullet",
			],
	}),
});

it('renders bio name with stubbed fetch', (done) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  setTimeout(() => {
		const name = "The Bio Name"
  	expect(div.outerHTML).toEqual(expect.stringContaining(name));
  	done();
  }, 0);
});
