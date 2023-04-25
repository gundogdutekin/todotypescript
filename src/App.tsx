import {FC,useEffect,useState} from "react";
import './App.css'
import ListTasks from "./components/ListTasks";
import {TaskList} from "./propstypes"

const  App:FC =()=> {
   const [task,setTask]=useState<string>('')
   const[workday,setWorkday]=useState<number>(0)
   const[taskList,setTaskList]=useState<TaskList[]>([])

   const handleTask=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setTask(event.target.value)
    }
   const handleWorkday=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setWorkday(Number(event.target.value))
    }
   const handleAdd=()=>{
      if(task==='' || workday===null) return ''
      setTaskList([...taskList,{task,workday}])
      setTask('')
      setWorkday(0)
     
    }
    const handleDelete=(name:string):void =>{
     
      const newTaskList=taskList.filter((item)=>item.task!==name)
      setTaskList(newTaskList)
     // console.log(Number(event.target.value));
      
    }
    useEffect(() => {
      console.log(taskList)
    }, [taskList])
    

  return (
    <div>
     <h1>TASKS</h1>
     <input type="text" className="first-input" onChange={handleTask} value={task} placeholder="Lütfen Taskınızı Giriniz..." />
     <input type="number" className="second-input" onChange={handleWorkday} value={workday} placeholder="Task Süresi" />
     <button className="success" onClick={handleAdd}>Ekle</button>
      <ul className="tasks">
        {taskList.map((task:TaskList,index:number):JSX.Element=>(
          <ListTasks key={index} task={task} handleDelete={handleDelete}  />
        ))}
      </ul>
      
    </div>
  )
}

export default App
