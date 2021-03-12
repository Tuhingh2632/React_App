import React, {useState} from 'react';
import './App.css';
import InputArea from "./components/inputArea";
import ToDoItem from "./components/todolist";

function Apps() {

  const [items,setitems] = useState([]);

  const addItems =(inputText)=>{
    setitems((prevItems)=>{
      return [...prevItems,inputText]
    })
  }
  const deleteItems = (id)=>{
    setitems((prevItems)=> {
        return prevItems.filter((item, index)=> {
        return index !== id;
      })
    })

  }
  return (
   
      <div className="container">
        <div className="heading">
          <h1>To Do List</h1>
          
        </div>
        <InputArea onAdd={addItems} />
        <div>
          <ul>
          {items.map((item,index)=>(

          <ToDoItem key={index} id={index} text={item} onChecked={deleteItems}/> 


          ))}
          </ul>
        </div>
        
      </div>
      
    
  );
}

export default Apps;
