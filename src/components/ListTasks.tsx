import {TaskList} from "../propstypes"
type Task={
    task:TaskList,
    handleDelete(name:string):void
}

function ListTasks({task,handleDelete}:Task) {
  
  return (
    <>
    <li className="task" ><span className="task-name">{task.task}</span> <span className="task-day">{task.workday} gün</span>
    <span><button onClick={()=>handleDelete(task.task)} className="danger">Sil</button></span> </li>
    </>
    
  )
}

export default ListTasks