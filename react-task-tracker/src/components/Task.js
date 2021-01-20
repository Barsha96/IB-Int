import {FaTimes} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'


const Task = ({task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>{task.text}
            <div>
            <FaBell style={{ color:'grey', cursor:'pointer', marginRight:'20px'}} onClick={() => {onToggle(task.id)}}/>
            <FaTimes style={{ color:'red', cursor:'pointer'}} onClick={() => {onDelete(task.id)}}/>
            </div>
            </h3>
            <p>{task.day}</p>
        </div>
    )
} 

export default Task
