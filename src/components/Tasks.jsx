import React,{useState} from 'react'

const AddTasks = ({onCancel,onAddTask}) => {
    const [task,setTask]=useState("")
    return (
        <div className="task-dialogue">
         <input value={task} onChange={(event)=>setTask(event.target.value)}/>
          <div className="task-btn-action-container">
          <div className="btn-task-action">
            <button className="Add-btn" onClick={()=>
                {onAddTask(task)}}>Add task</button>
            <button className="cancel-btn" onClick={()=>onCancel()}>cancel</button>
          </div>
          <div className="btn-calender"></div>
        </div>
        </div>
    )
}


const Tasks = () => {
    const [showAddTask, setshowAddTask] = useState(false);
    const [tasks, setTasks] = useState([])

    const addTask=(newtask)=>
    {
        setTasks((pervState)=>[...pervState,newtask])
    }
  return (
    <div className="tasks">
      <h1>All Tasks</h1>
      <div className="add-task-btn" onClick={() => setshowAddTask((pervState) => !pervState)}>
        <span className="plus">+</span>
        <span className="add-task-text">Add task</span>
      </div>
      {showAddTask && <AddTasks onAddTask={addTask} onCancel={()=>setshowAddTask(false)}/>}

      {tasks.length>0 ? tasks.map((task) => <p>{task}</p>) : null}
    </div>
  );
};

export default Tasks
