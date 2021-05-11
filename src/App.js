import React from "react"
import "./App.css"
import Input from "./components/Input"

function App() {
  
   return (
      <div className="app">
         <div className="header">
            <h2>To-Do-List</h2>
         </div>
         <div className="app__container">
            <Input/>
            
         </div>
      </div>
   )
}

export default App
