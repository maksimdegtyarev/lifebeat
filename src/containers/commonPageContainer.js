import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Form from '../components/form'
import {connect} from 'react-redux'
import EventsList from './eventsListContainer'
import {addEvent} from '../actions'
import Col from 'react-bootstrap/lib/Col'


export class CommonPageContainer extends Component {
	render() {
		return (
			<div className="container">
				<Col xs={12} sm={4}>
					<Form submit={(text) => this.props.submitForm(text)} />
				</Col>
				<Col xs={12} sm={6}>
					<EventsList />
				</Col>
			</div>
		)
	}
}
CommonPageContainer.propTypes = {
	submitForm: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (text) => {
			const trimmedText = text.trim()
			if(trimmedText.length) {
				dispatch(addEvent(trimmedText))
			}
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CommonPageContainer)