import React, { Component } from 'react'
//引入action
import { nanoid } from 'nanoid'
import { connect } from 'react-redux';
class Person extends Component {
  render() {
    return (
      <div>
        <input ref={c => this.nameN = c} type="text" placeholder="name" />
        <input ref={c => this.ageN = c} type="text" placeholder="age" />
        <button onClick={this.addP}>add</button>
        <ul>
          {this.props.yiduiren.map(p => {
            return <li kry={p.id}>{p.name}--{p.age}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({ yiduiren: state.rens }),
  {}
)(Person)