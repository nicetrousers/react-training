import React, { Component } from 'react'; 

export default class Bio extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={this.props.portrait} alt={this.props.name} />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <div className="App-intro">
          <ul>
            {this.makeBullets()}
          </ul>
        </div>
      </div>
    );
  }

  makeBullets() {
    return this.props.bullets.map((bullet, index) => {
      return <li key={index}>{bullet}</li>
    });
  }
}

/*

import React, { Component } from 'react'; 

export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bullets_visible: true,
    };
  }
  render() {
    return (
      <div>
        <header className="App-header" onClick={() => this.handleClick()}>
          <img src={this.props.portrait} alt={this.props.name} />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <div className={this.makeBulletClasses()}>
          <ul>
            {this.makeBullets()}
          </ul>
        </p>
      </div>
    );
  }

  makeBullets() {
    return this.props.bullets.map(bullet, index) => {
      return <li key={index}>{bullet}</li>;
    });
  }

  handleClick() {
    this.setState({
      bullets_visible = !this.state.bullets_visible,
    });
  }
  makeBulletClasses() {
    let classes = "App-intro";
    if (!this.state.bullets_visible) {
      classes = " App-intro-hidden";
    }
    return classes;
  }
}

*/