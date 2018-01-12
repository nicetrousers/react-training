import React, { Component } from 'react'; 
import APIItem from './APIItem.js';
import BioForm from './BioForm.js';
import BioDisplay from './BioDisplay.js';

export default class BioPage extends Component {
  render() {
    return (
      <APIItem  api_url='http://localhost:8000/bios/1'
        itemForm={BioForm}
        itemDisplay={BioDisplay}
      />
    );
  }
}