import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	todos: [{ id: 1, text: 'hello everyone!' }],
};

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				todo: action.payload,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});
