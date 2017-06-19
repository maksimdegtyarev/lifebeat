import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Col from 'react-bootstrap/lib/Col'


export default (props) => {
	return (
		<Navbar>
			<Col xs={12} sm={5}>
				<Navbar.Brand>
					<Link to="/">Lifebeat тестовое задание</Link>
				</Navbar.Brand>
			</Col>
			<Col xs={12} sm={7}>
				<Nav>
					<NavItem>
						<Link to="/">Общие события</Link>
					</NavItem>
					<NavItem>
						<Link to="/my">Мои события</Link>
					</NavItem>
				</Nav>
			</Col>
		</Navbar>
	)
}