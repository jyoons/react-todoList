import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({todoData, setTodoData}) => {
  const handleEnd =(result)=>{
    if(! result.destination) return;
    const newTodoData = todoData;
    const [reorderItem] = newTodoData.splice(result.source.index, 1); // data 삭제
    newTodoData.splice(result.destination.index, 0, reorderItem); //삭제한 data 추가
    setTodoData(newTodoData)
    console.log(result)
  }
  return(
    <div>
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId='todo'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoData.map((data, index)=>(
              <Draggable
                key={data.id}
                draggableId={data.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <List   
                  key={data.id}
                  title={data.title}
                  id={data.id}
                  todoData={todoData}
                  setTodoData={setTodoData}
                  provided={provided}
                  snapshot={snapshot}
                  completed={data.completed}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
          )}
      </Droppable>
    </DragDropContext>
    </div>
  )
})
export default Lists