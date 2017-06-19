import React, {Component} from 'react'


export default class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}
	handleChange(v) {
		this.setState({
			text: v.target.value
		})
	}
	handleClick(e) {
		e.preventDefault()
		this.props.submit(this.state.text)
	}
	render() {
		return (
			<form>
				<textarea onChange={(v) => this.handleChange(v)} value={this.state.text}></textarea>
				<button onClick={(e) => this.handleClick(e)}>Send</button>
			</form>
		)
	}
}