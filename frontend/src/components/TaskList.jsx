import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({tasks, fetchTasks}) => { // the curly braces are used to destructure the props object
    const handleDelete = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:5213/api/tasks/${taskId}`, {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            fetchTasks();
        } catch(error) {
            console.error('Error deleting task:', error);
        }
    };
    
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {/* <button>Reorder</button> */}
                        <button type="delete" onClick={() => handleDelete(task.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                        {/* <button><FontAwesomeIcon icon={faEdit} /></button> */}
                        <strong>{task.title}</strong>: {task.description} - Priority: {task.priority}
                    </li>
                ))}
            </ul>
        </>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
        })
    ).isRequired,
    fetchTasks: PropTypes.func.isRequired,
};

//const TaskListMem = React.memo(TaskList); // only use this when it's faster to render the component again than to compare the props
                                          // is it faster here? probably not, but it's a good example
                                          // refer to profiler tab in dev tools to see if it's worth it

export default TaskList;
//export { TaskListMem };