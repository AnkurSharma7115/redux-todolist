import Checkbox from "@material-ui/core/Checkbox"
import React from "react"
import { useDispatch } from "react-redux"
import { setCheck, setDelTodo } from "../features/todoSlice"
import "./TodoItem.css"

function TodoItem({ item, done, id ,handleEdit}) {
   const dispatch = useDispatch()
   const handleChange = () => {
      dispatch(setCheck(id))
   }
   
   const delItem = () => {
      dispatch(setDelTodo(id))
   }
const editItem = () => {
   handleEdit(id, item)
}
   return (
      <div className="todoItem">
         <div className="item-check" onClick={handleChange}>
            <Checkbox
               checked={done}
               color="primary"
               inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p style={{ textDecoration: done ? "line-through" : "none" }}>
               {item}
            </p>
         </div>
         <button className="edit" onClick={editItem}>
            Edit
         </button>
         <button className="del" onClick={delItem}>
            Del
         </button>
      </div>
   )
}

export default TodoItem
