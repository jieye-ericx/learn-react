import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

	state = { //初始化状态
		users: [], //users初始值为数组
		isFirst: true,
		isLoading: false,
		err: ''
	} 

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
