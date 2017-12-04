import React, { Component } from 'react'; 
import BioHeading from './BioHeading.js';
import BioBullets from './BioBullets.js';
import BioForm from './BioForm.js';

export default class BioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bullets_visible: true,
      editing: true, //switch back to false when done 
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
    
    if (loading) return this.renderLoading();
    if (editing) return this.renderForm();

    const onClick = this.handleClick.bind(this);
    const onEditClick = this.handleEditClick.bind(this);
    return (
      <div>
        { saving && <div>Saving... </div>}
        <BioHeading { ...{ portrait, name, onClick, onEditClick} } />
        <BioBullets { ...{ bullets, bullets_visible } } />
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