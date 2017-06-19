import React, {Component} from 'react'
import styled from 'styled-components'
import Panel from 'react-bootstrap/lib/panel'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


export default class Event extends Component {
	render() {
		const Container = styled(Panel)`
			margin-bottom: 20px;
			position: relative;
		`
		const Head = styled.div`
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		`
		const Author = styled(Link)`
			font-size: 12px;
			color: gray;
		`
		const Message = styled.p`
			font-size: 16px;
			line-height: 17px;
			color: #000;
		`
		const DateTime = styled.span`
			font-size: 12px;
			color: gray;	
		`
		const Delete = styled.a`
			color: gray;
			font-size: 12px;
			text-decoration: underline;
			position: absolute;
			right: 10px;
			bottom: 4px;
			cursor: pointer;
		`

		return (
			<Container>
				<Head>
					<Author to={"/author/" + this.props.item.author_id}>{this.props.item.author_name}</Author>
					<DateTime>{(new Date(this.props.item.date)).toLocaleString()}</DateTime>
				</Head>
				<Message>{this.props.item.text}</Message>
				{
					this.props.canDelete &&
					<Delete onClick={() => this.props.deleteHandle(this.props.item.id)}>Удалить</Delete>
				}
			</Container>
		)
	}
}
Event.propTypes = {
	item: PropTypes.object.isRequired,
	canDelete: PropTypes.bool,
	deleteHandle: PropTypes.func.isRequired
}
