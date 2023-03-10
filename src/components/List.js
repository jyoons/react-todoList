import React, { useState } from 'react'


const List = React.memo(({id, title, completed, todoData, setTodoData, provided, snapshot, handleClick}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editeTitle, setEditeTitle] = useState(title);
    const handleCompletedChange = (id) =>{
      let newTodoData = todoData.map((data) =>{
        if(data.id === id){
            data.completed = ! data.completed;
        }
        return data
      })
      setTodoData(newTodoData) 
      localStorage.setItem('todoData', JSON.stringify(newTodoData))
    }
  const handleChange = (event) => {
    setEditeTitle(event.target.value)
  }
  const handleSubmit = () =>{
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
          data.title = editeTitle;
      }
      return data;
    })
    setTodoData(newTodoData)
    localStorage.setItem('todoData', JSON.stringify(newTodoData))
    setIsEditing(false)
  }
  if(isEditing){
    return(
      <div>
        <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={editeTitle}
            onChange={handleChange}
            />
          </form> 
          <div>
            <button className="px-4 py-2 float-right" onClick={()=>setIsEditing(false)}>X</button>
            <button className="px-4 py-2 float-right" onClick={handleSubmit}>save</button>
            </div>
        </div>
    </div>
    )
  }else{
    return (
      <div 
      key={id}
      {...provided.draggableProps} 
      ref={provided.innerRef}
      {...provided.dragHandleProps}
    >
      <div className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
        <div>
          <input
          type="checkbox"
          onChange={()=>handleCompletedChange(id)}
          defaultChecked={false}
          />
          <label htmlFor="" className={completed ? "line-through" : undefined}>{title}</label>
        </div> 
        <div>
          <button className="px-4 py-2 float-right" onClick={()=>handleClick(id)}>X</button>
          <button className="px-4 py-2 float-right" onClick={()=>setIsEditing(true)}>edit</button>
          </div>
      </div>
    </div>
    )
  }
})
// export const MemoizedMovie = React.memo(List);
// todoList=======
// git
// https://github.com/jyoons/react-todoList
// 배포URL
// https://jyoons.github.io/react-todoList/
export default List