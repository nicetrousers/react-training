import React, { Component } from 'react'; 
import BioForm from './BioForm.js';
import BioDisplay from './BioDisplay.js';

export default class EditableBio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
		};
	}

	render() {
    const { name, portrait, bullets } = this.props;
    const { editing } = this.state;

    let component;
    if (editing) {
      const onSubmit = this.handleSubmit.bind(this);
      component =
        <BioForm { ...{ name, portrait, onSubmit } } />;
    } else {
      const onEditClick = this.handleEditClick.bind(this);
      component =
        <BioDisplay { ...{ name, portrait, bullets, onEditClick } } />;
    }
    return component
	}

  handleSubmit(formValues) {
  	const { onUpdate, bullets } = this.props;
    this.setState({
      editing: false, 
    }); 
    onUpdate( { bullets, ...formValues } );
  }
  
  handleEditClick(event) {
    event.stopPropagation();
    this.setState({ editing: true });
  }

}