import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function LodoList() {

    let [todo, setTodo] = useState([{
        task: "sample task",
        id: uuidv4(),
        completed: false,
    }]);

    let [newTodo, setNewTodo] = useState("");
    let [completed, setCompleted] = useState(0);

    function addTodo() {
        if (newTodo) {
            // Append the new todo item to the existing list
            setTodo((prevTodos)=>{
                return [...prevTodos, {task: newTodo, id: uuidv4()}]
            });
            setNewTodo(""); // Clear the input field after adding a task
        }
    }
            

    function deleteItem(id) {
        // Remove the item by matching its id
        let afterDelete = todo.filter(item => item.id !== id);
        todo.map((item)=>{
            if(item.id === id && item.completed === true){
                setCompleted((prevCompleted)=>prevCompleted - 1);
            }
        })
        setTodo(afterDelete);
    }

    const upperCaseAll = ()=>{
       let UpperCaseArray =  todo.map((item)=>{
            return ({...item, task:item.task.toUpperCase()})
        })
        setTodo(UpperCaseArray)
    }

    const completeTask = (id)=>{
        let completedArray = todo.map((item)=>{
            if(item.id == id){
                setCompleted(completed + 1);
                return {...item, completed: !item.completed}
            }else{
                return item;
            }
        });

        setTodo(completedArray);
    }

    const lowerCaseAll = ()=>{
       let lowerCase =  todo.map((item)=>{
            return ({...item, task:item.task.toLowerCase()})
        })
        setTodo(lowerCase)

    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>

            <div className="mb-4">
                <input
                    onChange={(event) => setNewTodo(event.target.value)}
                    value={newTodo}
                    type="text"
                    placeholder='Add a task'
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <button
                onClick={addTodo}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
                Add Task
            </button>

            
            <button
                onClick={upperCaseAll}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
               UpperCaseAll
            </button>

            <button
                onClick={lowerCaseAll}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
               LowerCaseAll
            </button>

            <br />
            <br />

            <h4 className="text-xl font-semibold mt-6 text-black">Tasks Todo</h4>
            <h4 className="text-xl font-semibold mt-6 text-black">Complete Task {completed}</h4>

            <ul className="list-disc list-inside mt-3 space-y-4 overflow-y-auto h-56 px-4">
                {todo.map((item) => (
                    <li  key={item.id} className="text-white-700 py-1 bg-black rounded-lg flex justify-between items-center px-4">
                     <p onClick={()=>completeTask(item.id)} className='cursor-pointer'>   {item.completed ?  <span className='line-through'>{item.task}</span> : <span>{item.task}</span>}</p>
                        <button onClick={() => deleteItem(item.id)} className='bg-transparent'>❌</button>
                    </li>
                ))}
            </ul>

            
        </div>
    );
}
