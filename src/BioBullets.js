import React, { Component } from 'react'; 

export default class BioBullets extends Component {
	render () {
		return (
	    <div className={ this.makeBulletClasses() }>
	      <ul>
	        { this.makeBullets() }
	      </ul>
	    </div>
	  );
	}

  makeBullets() {
    const bullets = this.props.bullets || [];
    return bullets.map((bullet, index) => {
      return <li key={index}>{bullet}</li>;
    });
  }

  makeBulletClasses() {
    let classes = "App-intro";
    if (!this.props.bullets_visible) {
      classes = " App-intro-hidden";
    }
    return classes;
  }
}