import React, {Component} from 'react'
import {connect} from 'react-redux'
import EventsList from './eventsListContainer'
import Name from '../components/name'


export class MyPageContainer extends Component {
	render() {
		return (
			<div>
				<Name name={this.props.name} />
				<EventsList id={this.props.id} />
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		name: state.authors.filter(item => state.currentAuthor === item.id)[0].name,
		id: state.currentAuthor
	}
}
export default connect(mapStateToProps)(MyPageContainer)