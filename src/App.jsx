import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    try {
      const todoString = localStorage.getItem("todos");
      if (todoString) {
        const todo = JSON.parse(todoString);
        setTodos(todo);
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      localStorage.removeItem("todos"); 
    }
  }, [])

  const saveToLS = () => {
    if (todo.trim().length > 0) {
      setTodos([...todos, { id: uuidv4(), todo: todo.trim(), isCompleted: false }]);
      setTodo("");
    }
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id);
    if (t) {
      setTodo(t.todo);
      handleDelete(e, id);
    }
  }

  const handleDelete = (e, id) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodo("");
  }

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(newTodos);
  }

  return (
    <>
      <div className="relative min-h-screen pb-3">
        <Navbar />
        <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="container md:w-9/12 w-full md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-screen">
          <h1 className='font-bold text-center text-2xl text-violet-900'>iTask-Manage your todo at one place</h1>
          <div className="addTodo my-5">
            <h2 className='text-xl font-bold mb-2 text-center'>Add a Todo</h2>
            <div className="inputElement flex gap-4">
              <input className='w-full outline-none rounded-md p-2' type="text" onChange={handleChange} value={todo} onKeyDown={(e) => {
                if (e.key === "Enter" && todo.trim().length > 0)
                  handleAdd();
              }} />
              <button className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-white font-bold rounded-md cursor-pointer' onClick={handleAdd} disabled={todo.length < 1}>Save</button>
            </div>
          </div>
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} />Show Finished
          <div className="h-[1px] bg-gray-300"></div>
          <h2 className="font-bold my-2 text-center py-3 text-2xl text-violet-800">Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div className='m-5 text-center font-bold'>No Todos to display</div>}
            {todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between w-full my-3 items-center">
                <div className='flex gap-5'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                  <div className={`${item.isCompleted ? "line-through" : ""} w-auto`}>{item.todo}</div>
                </div>
                <div className="buttons flex">
                  <button className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-white font-bold rounded-md mx-1' onClick={(e) => handleEdit(e, item.id)}><FaEdit />
                  </button>
                  <button className='bg-violet-800 hover:bg-violet-900 px-2 py-1 text-white font-bold rounded-md mx-1' onClick={(e) => handleDelete(e, item.id)}><MdDelete /></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>


  )
}

export default App
