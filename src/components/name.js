import React from 'react'
import styled from 'styled-components'


export default (props) => {
	const Name = styled.div`
		font-size: 20pt;
	`
	return (
		<Name>{props.name}</Name>
	)
}