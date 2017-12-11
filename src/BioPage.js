import React, { Component } from 'react'; 
import EditableBio from './EditableBio.js';

export default class BioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { name, portrait, loading, saving  } = this.state;
    const { bullets } = this.state;
    if (loading) return this.renderLoading();
    const onUpdate = this.handleUpdate.bind(this);
    return (
      <div>
        { saving && <div>Saving... </div> }
        <EditableBio { ...{ name, portrait, bullets, onUpdate } } />
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
    const { name, portrait, bullets } = formValues;
    this.setState({
      saving: true,
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