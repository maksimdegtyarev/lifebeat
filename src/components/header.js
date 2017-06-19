import React from 'react'
import {Link} from 'react-router-dom'


export default (props) => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Common events</Link>
				</li>
				<li>
					<Link to="/my">My events</Link>
				</li>
			</ul>
			{props.children}
		</div>
	)
}