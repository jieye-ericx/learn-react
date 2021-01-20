import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const { users, isFirst, isLoading, err } = this.props
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
