import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


export default function Name(props) {
	const Name = styled.div`
		font-size: 20pt;
	`
	return (
		<Name>{props.name}</Name>
	)
}

Name.propTypes = {
	name: PropTypes.string
}