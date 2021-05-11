import React, { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveTodo, setEditTodo, selectTodoList } from "../features/todoSlice"

import "./Input.css"
import TodoItem from "./TodoItem"

function Input() {
   const [inputItem, setInputItem] = useState("")
   const [isEdit, setIsEdit] = useState(false)
   const [editID, setEditID] = useState(null)
   // const [editItem, setEditItem] = useState('')
   const refEdit = useRef(null)

   const todoList = useSelector(selectTodoList)
   const dispatch = useDispatch()

   const handleEdit = (id, item) => {
      setIsEdit(true)
      setEditID(id)
      setInputItem(item)
      refEdit.current.style.backgroundColor = 'lightseagreen'
   }

   const addTodo = (e) => {
     const item = inputItem
      e.preventDefault()
      if (isEdit === true) {
         dispatch(setEditTodo({ id:editID, item:item }))
      } else {
         dispatch(
            saveTodo({
               item: inputItem,
               done: false,
               id: Date.now(),
            })
         )
      }
      setIsEdit(false)
      setInputItem("")
      refEdit.current.style.backgroundColor = "honeydew"
   }

   return (
      <>
         <div className="input-div" ref={refEdit}>
            <form onSubmit={addTodo}>
               <input
                  type="text"
                  value={inputItem}
                  onChange={(e) => setInputItem(e.target.value)}
                  placeholder="e.g., Meeting with Manager at 11 AM"
                  
               />
               <button type="submit">{isEdit? 'Edit Item': 'Add Item'}</button>
            </form>
         </div>
         <div className="app__todoContainer">
            {todoList.map((item) => (
               <TodoItem key={item.id} {...item} handleEdit={handleEdit} />
            ))}
         </div>
      </>
   )
}

export default Input
