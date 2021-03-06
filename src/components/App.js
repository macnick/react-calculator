import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';
import '../styles/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    const calc = calculate({ total, next, operation }, btnName);
    this.setState({ total: calc.total, next: calc.next, operation: calc.operation });
  }

  render() {
    const { next, total } = this.state;
    const result = next || total;

    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
