import React from 'react'

export default function Form({todoData, setTodoData, value, setValue}) {
    const handleSubmit = (e) =>{
        e.preventDefault();
        let newTodo ={
        id:Date.now(),
        title:value,
        completed : false
        }
        // setTodoData({todoData : [...todoData, newTodo], value:''})
        setTodoData((prev) => [...prev, newTodo])
        localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]))
        setValue('')
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit} className="flex pt-2">
        <input
        type="text"
        name="value"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        placeholder="해야 할일을 입력하세요"
        value={value}
        onChange={handleChange}
        />
        <input
        type="submit"
        value="입력"
        className="p-2 text-blue-400 border border-blue-400 hover:text-white hover:bg-blue-400"
        />
  </form>
  )
}
