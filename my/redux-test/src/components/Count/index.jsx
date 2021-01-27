import React, { Component } from 'react';
import store from '../../redux/store'
import { createIncAction, createDecAction, createAscAction } from '../../redux/count_action'

class Count extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  inc = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncAction(value * 1))
  }
  dec = () => {
    const { value } = this.selectNumber
  }
  incIfOdd = () => {
    const { value } = this.selectNumber

  }
  incAsc = () => {
    const { value } = this.selectNumber

    store.dispatch(createAscAction(value * 1, 500))

  }
  render() {
    return (
      <div>
        <h1>当前求和：{store.getState()}</h1>
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