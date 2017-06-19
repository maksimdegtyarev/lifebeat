import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/button'
import styled from 'styled-components'
import PropTypes from 'prop-types'


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
		this.setState({
			text: ''
		})
	}
	render() {
		const StyledButton = styled(Button)`
			margin-top: 20px;
		`
		return (
			<FormGroup controlId="formControlsTextarea">
				<ControlLabel>Сообщение:</ControlLabel>
				<FormControl componentClass="textarea" placeholder="Ваше сообщение..." onChange={(v) => this.handleChange(v)} value={this.state.text} />
				<StyledButton bsStyle="primary" onClick={(e) => this.handleClick(e)}>Отправить</StyledButton>
			</FormGroup>
		)
	}
}
Form.propTypes = {
	submit: PropTypes.func.isRequired
}
