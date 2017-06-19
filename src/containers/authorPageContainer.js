import React, {Component} from 'react'
import {connect} from 'react-redux'
import EventsList from './eventsListContainer'
import Name from '../components/name'
import Col from 'react-bootstrap/lib/col'
import PropTypes from 'prop-types'


export class AuthorPageContainer extends Component {
	render() {
		return (
			<div className="container">
				<Col xs={12} sm={4}>
					<Name name={this.props.name} />
				</Col>
				<Col xs={12} sm={6}>
					<EventsList id={this.props.id} />
				</Col>
			</div>
		)
	}
}
AuthorPageContainer.propTypes = {
	name: PropTypes.string,
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

const mapStateToProps = (state, ownProps) => {
	let id = state.currentAuthor
	if(ownProps.match.params.id) {
		id = +ownProps.match.params.id
	}
	return {
		name: state.authors.filter(item => id === item.id)[0].name,
		id
	}
}
export default connect(mapStateToProps)(AuthorPageContainer)
