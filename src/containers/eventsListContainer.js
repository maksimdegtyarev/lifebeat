import React from 'react'
import {connect} from 'react-redux'
import EventsList from '../components/eventsList'
import {removeEvent} from '../actions'


const mapStateToProps = (state, ownProps) => {
	const getAuthor = (id) => state.authors.filter(item => item.id === id)
	const list = state.list
					.filter(item => !ownProps.id || item.author_id === ownProps.id)
					.map(item => ({...item, author_name: getAuthor(item.author_id)[0].name}))
	return {
		list,
		currentAuthor: state.currentAuthor
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteHandle: (id) => {
			dispatch(removeEvent(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)