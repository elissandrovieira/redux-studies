import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'tasks',
    initialState:{ data: []},
    reducers: {
        ADD_TASK (state, { payload }){
            return {
                ...state,
                data: [
                    ...state.data,
                    payload
                ]
            }
        },
        REMOVE_TASK (state, { payload }) {
            
            return state.data.filter( task => task !== payload)
        }
    }
})

export const { ADD_TASK, REMOVE_TASK } = todoSlice.actions

const store = configureStore({
    reducer: todoSlice.reducer
})

export default store