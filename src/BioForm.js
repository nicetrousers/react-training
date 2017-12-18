import React, { Component } from 'react';
import Input from '@oreilly/shape-react-core/Input';
import '@oreilly/shape-react-core/Input.css';
import Button from '@oreilly/shape-react-core/Button';
import '@oreilly/shape-react-core/Button.css';

export default class BioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      portrait: this.props.portrait,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
      portrait: nextProps.portrait,
    });
  }

  render() {
    const { name, portrait } = this.state;
    const { saving } = this.props;
    const onSubmit = this.handleSubmit.bind(this);
    return (
      <form className="App-form" onSubmit={onSubmit}>
        <h1>Edit Bio</h1>
        <Input label="Name" name="name"
         value={name || ""} onChange={this.changeHandlerFor("name")} />
        <Input label="Portrait URL" name="portrait"
         value={portrait || ""} onChange={this.changeHandlerFor("portrait")} />
        <Button type="submit" disabled={saving}>
          { saving ? "Saving..." : "Submit" }
        </Button>
      </form>
    );
  }

  handleSubmit(event) {
    const { name, portrait } = this.state;
    const { bullets } = this.props;
    const formValues = { name, portrait, bullets };
    console.log(formValues);
    event.preventDefault();
    this.props.onSubmit(formValues);
  }

  changeHandlerFor(field_name) {
    return event => this.setState({ [field_name]: event.target.value });
  }
}