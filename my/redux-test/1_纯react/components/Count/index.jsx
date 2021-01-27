import React, { Component } from 'react';

class Count extends Component {
  state = {
    count: 0
  }
  inc = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count + value * 1 })
  }
  dec = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count - value * 1 })
  }
  incIfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 })
    }

  }
  incAsc = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和：{this.state.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.inc}>+</button>&nbsp;
        <button onClick={this.dec}>-</button>&nbsp;
        <button onClick={this.incIfOdd}>求和奇数再加</button>&nbsp;
        <button onClick={this.incAsc}>异步加</button>
      </div>
    );
  }
}

export default Count;