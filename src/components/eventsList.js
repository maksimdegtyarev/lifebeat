import React, {Component} from 'react'
import Event from './event'
import Alert from 'react-bootstrap/lib/Alert'
import PropTypes from 'prop-types'


export default class EventsList extends Component {
	render() {
		return (
			<div>
				{
					this.props.list.length > 0 ?
						this.props.list.reverse().map(item => {
							return (
								<Event
									key={item.id}
									item={item}
									canDelete={this.props.currentAuthor === item.author_id}
									deleteHandle={(id) => this.props.deleteHandle(id)}
								/>
							)
						})
					:
					<Alert bsStyle="warning">
						Нет событий
					</Alert>
				}
			</div>
		)
	}
}
EventsList.propTypes = {
	list: PropTypes.array.isRequired,
	currentAuthor: PropTypes.number.isRequired,
	deleteHandle: PropTypes.func.isRequired
}
