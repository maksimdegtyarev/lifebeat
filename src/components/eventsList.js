import React, {Component} from 'react'
import Event from './event'


export default class EventsList extends Component {
	render() {
		return (
			<div>
				{
					this.props.list.map(item => <Event key={item.id} item={item} />)
				}
			</div>
		)
	}
}