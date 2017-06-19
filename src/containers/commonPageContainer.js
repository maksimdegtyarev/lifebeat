import React, {Component} from 'react'
import Form from '../components/form'
import {connect} from 'react-redux'
import EventsList from './eventsListContainer'
import {addEvent} from '../actions'


export class CommonPageContainer extends Component {
	render() {
		return (
			<div>
				<Form submit={(text) => this.props.submitForm(text)} />
				<EventsList />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (text) => {
			dispatch(addEvent(text))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CommonPageContainer)