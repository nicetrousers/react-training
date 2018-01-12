import React, { Component } from 'react'; 
import EditableItem from './EditableItem.js';

export default class APIItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      saving: false,
    };
    fetch(this.props.api_url)
      .then(response => response.json())
      .then(json => {
        this.setState({ ...this.state, item: json, loading: false,});
      });
  }

	render() {
    const { item, loading, saving  } = this.state;
    const { itemForm, itemDisplay } = this.props;
    if (loading) return this.renderLoading();
    const onUpdate = this.handleUpdate.bind(this);

		return (
      <div>
        { saving && <div>Saving... </div> }
        <EditableItem 
        	item={ item } 
          onUpdate={ onUpdate } 
          itemForm={ itemForm }
          itemDisplay={ itemDisplay }
				/>
      </div>
    );
  }

  renderLoading() {
  return (
    <div>
      <header className="App-header" >
        Loading...
      </header>
    </div>
    )
  }

  handleUpdate(formValues) {
    const item = formValues;
    this.setState({
      saving: true,
      item: item,
    }); 
    fetch(this.props.api_url, {
      method: 'POST',
      body: JSON.stringify(item),
    }).then(resp => {
      if (resp.ok) {
        this.setState({ 
          saving: false,
        });
      }
    });
  }
}