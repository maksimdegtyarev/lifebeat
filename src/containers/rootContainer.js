import React, {Component} from 'react'
import MyPage from './myPageContainer'
import CommonPage from './commonPageContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from '../components/header'


export default class RootContainer extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route exact path="/" component={CommonPage} />
					<Route path="/my" component={MyPage} />
				</div>
			</Router>
		)
	}
}
