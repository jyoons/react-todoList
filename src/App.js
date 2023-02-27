import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';
export default function App(){
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  return (
  <div className="flex justify-center items-center w-screen h-screen bg-blue-100">
    <div className='w-full p-6 m-4 bg-white rounded shadow'>
      <div className='flex justify-between mb-3'>
      <h1 className="text-3xl font-bold underline">할일 목록</h1>
      </div>
      <Lists todoData={todoData} setTodoData={setTodoData}/>
      <Form setTodoData={setTodoData} setValue={setValue} value={value}/>
    </div>
  </div>
  )
}