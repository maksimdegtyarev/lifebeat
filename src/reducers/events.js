const INITIAL_STATE = {
	currentAuthor: 1,
	authors: [
		{
			id: 1,
			name: 'Иванов Иван'
		},
		{
			id: 2,
			name: 'Петров Петр'
		}
	],
	list: [
		{
			id: 1,
			author_id: 1,
			text: 'Отличная новостная лента!'
		},
		{
			id: 2,
			author_id: 2,
			text: 'Так себе лента, знаете ли...'
		}
	]
}

export default function(state = INITIAL_STATE, action) {
	if(action.type == 'ADD_EVENT') {
		let list = state.list.concat({id: +(new Date()), author_id: state.currentAuthor, text: action.payload.text})
		return {...state, list}
	}
	if(action.type == 'REMOVE_EVENT') {
		let list = state.list.filter(item => item.id !== action.payload.id)
		return {...state, list}
	}
	return {...state}
}
