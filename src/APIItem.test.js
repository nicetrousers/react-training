import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import APIItem from './APIItem';
// import renderer from 'react-test-renderer';

window.fetch = () => Promise.resolve({
	json: () => Promise.resolve({
		name: "The Bio Name",
		portrait: "portrait",
		bullets: [
			"bullet",
			],
	}),
});

it('renders saving state', (done) => {
	const wrapper = shallow(
		<APIItem api_url="http://localhost:8000/bios/1"
		itemForm={null}
		itemDisplay={null} />
	);
	// wrapper.setState({ saving: true });
	setTimeout(() => {
		wrapper.setState({ saving: true });
		expect(wrapper.text()).toEqual(expect.stringContaining("Saving..."));
		done();
	}, 0);
});

