import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {



	//更新App的state
	updateState = (stateObj) => {
		this.setState(stateObj)
	}

	render() {
		return (
			<div className="container">
				<Search updateState={this.updateState} />
				<List {...this.state}/>
			</div>
		)
	}
}
