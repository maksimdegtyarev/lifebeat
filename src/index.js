import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './reducers'
import RootContainer from './containers/rootContainer'


ReactDOM.render(
	<Provider store={store}>
		<RootContainer />
	</Provider>,
	document.getElementById('root')
)