import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = () => {
		const { keyWordElement: { value } } = this
		axios.get(`http://localhost:5000/search/users?q=${value}`).then(
			response => {
				console.log(response);
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
