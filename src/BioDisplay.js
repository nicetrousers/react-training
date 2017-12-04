import React, { Component } from 'react'; 
import BioHeading from './BioHeading.js';
import BioBullets from './BioBullets.js';

export default class BioDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bullets_visible: true,
    };
  }

  render() {
  	const { portrait, name, bullets } = this.props;
    const { bullets_visible } = this.state;
    
  	return (
			<div>
	      <BioHeading { ...{ portrait, name, onClick, onEditClick} }/>
	      <BioBullets { ...{ bullets, bullets_visible } }/>
			</div>
		);
	}
}