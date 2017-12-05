import React, { Component } from 'react'; 
import BioForm from './BioForm.js';
import BioDisplay from './BioDisplay.js';

export default class BioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      loading: true,
      saving: false,
    };
    fetch('http://localhost:8000/bios/1')
      .then(response => response.json())
      .then(json => {
        this.setState({ ...this.state, ...json, loading: false,});
      });
  }

  render() {
    const { portrait, name, editing, loading, saving } = this.state;
    const { bullets } = this.state;
    if (editing) return this.renderForm();
    if (loading) return this.renderLoading();

    const onEditClick = this.handleEditClick.bind(this);
    return (
      <div>
        { saving && <div>Saving... </div>}
        <BioDisplay { ...{ portrait, name, bullets, onEditClick } } />
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

  handleEditClick(event) {
    event.stopPropagation();
    this.setState({ editing: true });
  }

  renderForm() {
    const { name, portrait } = this.state;
    const onSubmit = this.handleSubmit.bind(this);
    return (
      <BioForm { ...{ name, portrait, onSubmit } } />
    );
  }

  handleSubmit(formValues) {
    const { name, portrait } = formValues;
    const { bullets } = this.state;
    this.setState({
      saving: true,
      editing: false, 
      name,
      portrait,
      bullets,
    }); 
    fetch('http://localhost:8000/bios/1', {
      method: 'POST',
      body: JSON.stringify({ name, portrait, bullets}),
    }).then(resp => {
      if (resp.ok) {
        this.setState({ 
          saving: false,
        });
      }
    });
  }
}