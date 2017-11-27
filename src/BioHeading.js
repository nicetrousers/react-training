import React, { Component } from 'react'; 
import Avatar from '@oreilly/shape-react-core/Avatar';
import '@oreilly/shape-react-core/Avatar.css';
import Icon from '@oreilly/shape-react-core/Icon';
import '@oreilly/shape-react-core/Icon.css';

export default function BioHeading(props) {
	const { portrait, name, onClick, onEditClick } = props;
	return (
    <header className="App-header" onClick={onClick}>
      <div className="App-edit" onClick={onEditClick}>
        <Icon name="edit" /> 
      </div>
      <Avatar coverUri={portrait} />
      <h1 className="App-title">{name}</h1>
    </header>
  );
}