import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   todoList: [],
}

const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      saveTodo: (state, action) => {
        //  state.todoList.push(action.payload)
        return {
            ...state, todoList: [...state.todoList, action.payload]
        }
      },
     setCheck : (state, action) => {
         state.todoList.map((item) => {
             if(action.payload === item.id){
                 item.done = !item.done
             }
             return item
         })
     },
     setEditTodo: (state, action) => {
            state.todoList.map((item) => {
                if(action.payload.id=== item.id){
                    item.item = action.payload.item
                }
                return item
            })
     },
     setDelTodo: (state,action) => {
           return {
              ...state,
              todoList: state.todoList.filter(
                 (item) => item.id !== action.payload
              ),
           }
     }
   },
})

export const { saveTodo, setCheck, setEditTodo, setDelTodo} = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer
