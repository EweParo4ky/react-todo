import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addToDo(state, action) {
            state.todos.push( {
                id: new Date().toISOString(),
                text:action.payload.text,
                active: true,
                complited: false,
              });
        },
        removeTodo(state, action) {
          state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
         },
        handleToogleComplited(state, action) {
            const selectedTodo = state.todos.find( todo => todo.id === action.payload.id);
            selectedTodo.complited = !selectedTodo.complited;
         },
    },
});
export const {addToDo, removeTodo, handleToogleComplited} = todoSlice.actions;
export default todoSlice.reducer;