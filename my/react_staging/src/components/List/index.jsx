import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
	state = { //初始化状态
		users: [], //users初始值为数组
		isFirst: true,
		isLoading: false,
		err: ''
	}

	componentDidMount() {
		PubSub.subscribe('11', (_, data) => {
			this.setState(data)
		})
	}
	render() {
		const { users, isFirst, isLoading, err } = this.state
		return (
			<div className="row">
				{
					isFirst ? <h2>first use</h2> :
						isLoading ? <h2>loading</h2> :
							err ? <h2>{err}</h2> :
								users.map((user, ind) => {
									console.log(ind);
									return (
										<div key={ind} className="card">
											<a rel="noreferrer" href={user.html_url} target="_blank">
												<img src={user.avatar_url} alt="head_portrait" style={{ width: '100px' }} />
											</a>
											<p className="card_text">{user.login}</p>
										</div>
									)
								})
				}
			</div>
		)
	}
}
