import React, {Component} from 'react'


export default class Event extends Component {
	render() {
		return (
			<div>
				<span>{this.props.item.id}</span>
				<span>{this.props.item.author_id}</span>
				<span>{this.props.item.author_name}</span>
				<span>{this.props.item.text}</span>
			</div>
		)
	}
}