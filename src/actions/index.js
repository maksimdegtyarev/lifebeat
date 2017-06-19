export function addEvent(text) {
	return {
		type: 'ADD_EVENT',
		payload: {
			text
		}
	}
}
export function removeEvent(id) {
	return {
		type: 'REMOVE_EVENT',
		payload: {
			id
		}
	}
}