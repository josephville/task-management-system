import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = ({tasks, fetchTasks}) => { // the curly braces are used to destructure the props object
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Task 
                            id={task.id}
                            title={task.title} 
                            description={task.description}
                            priority={task.priority}
                            fetchTasks={fetchTasks}
                        />
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