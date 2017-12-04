import React, { Component } from 'react'; 
import Button from '@oreilly/shape-react-core/Button';
import '@oreilly/shape-react-core/Button.css';
import Input from '@oreilly/shape-react-core/Input';
import '@oreilly/shape-react-core/Input.css';
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
    const { bullets, bullets_visible } = this.state;
    
    if (editing) return this.renderForm();
    if (loading) return this.renderLoading();

    const onClick = this.handleClick.bind(this);
    const onEditClick = this.handleEditClick.bind(this);
    return (
      <div>
        { saving && <div>Saving... </div>}
        <BioDisplay />
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

  handleClick() {
    this.setState({
      bullets_visible: !this.state.bullets_visible,
    });
  }

  handleEditClick(event) {
    event.stopPropagation();
    this.setState({ editing: true });
  }

  renderForm() {
    const { name, portrait, saving } = this.state;
    return (
      <form className="App-form" onSubmit={this.handleSubmit.bind(this)}>
        <h1>Edit Bio</h1>
        <Input label="Name" name="name" 
          value={this.state.name} 
          onChange={this.changeHandlerFor("name")} />
        <Input label="Portrait URL" name="portrait"  
          value={this.state.portrait} 
          onChange={this.changeHandlerFor("portrait")} />
        <Button type="submit" >Submit</Button>
      </form>
    );
  }

  changeHandlerFor(field_name) {
    return event => this.setState({ [field_name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, portrait, bullets } = this.state;
    this.setState({
      saving:true,
      editing: false, 
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
    })

  }
}