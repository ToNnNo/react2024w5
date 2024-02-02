import { createSlice } from "@reduxjs/toolkit"
// import { todoListReducer } from "../reducers/todoList"; 

const initialState = {
    tasks: [
        { id: 1, name: 'Créer une todo list' }, 
        { id: 2, name: 'Ajouter des valeurs' }, 
        { id: 3, name: 'Supprimer des valeurs'}
    ]
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState, // initialState: initialState
    // reducers: todoListReducer
    reducers: {
        add: (state, action) => {
            // state.tasks = [...state.tasks, action.payload.task]; // sans immer

            state.tasks.push( { id: Date.now(), name: action.payload.task } ); // avec immer
        },
        remove: (state, action) => {
            const id = action.payload.id;

            state.tasks = state.tasks.filter( task => task.id !== id )
        }
    }
});

export const { add, remove } = todoListSlice.actions;

export default todoListSlice.reducer;