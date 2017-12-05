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
  	const { portrait, name, bullets, onEditClick } = this.props;
    const { bullets_visible } = this.state;
    const onClick = this.handleClick.bind(this);
    
  	return (
			<div>
	      <BioHeading { ...{ portrait, name, onClick, onEditClick} }/>
	      <BioBullets { ...{ bullets, bullets_visible } }/>
			</div>
		);
	}

  handleClick() {
    this.setState({
      bullets_visible: !this.state.bullets_visible,
    });
  }
}