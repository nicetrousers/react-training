import React, { Component } from 'react'; 

export default class EditableItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
		};
	}

	render() {
    const { item } = this.props;
    const { editing } = this.state;
    let component;
    if (editing) {
      const onSubmit = this.handleSubmit.bind(this);
      const ItemForm = this.props.itemForm;
      component =
        <ItemForm { ...item } onSubmit={onSubmit} />;
    } else {
      const onEditClick = this.handleEditClick.bind(this);
      const ItemDisplay = this.props.itemDisplay;
      component =
        <ItemDisplay { ...item } onEditClick={onEditClick} />;
    }
    return component
	}

  handleSubmit(item) {
  	const { onUpdate } = this.props;
    this.setState({
      editing: false, 
    }); 
    onUpdate(item);
  }
  
  handleEditClick(event) {
    event.stopPropagation();
    this.setState({ editing: true });
  }

}