import PropTypes from 'prop-types';

const TaskList = ({tasks}) => { // the curly braces are used to destructure the props object
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
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
};

//const TaskListMem = React.memo(TaskList); // only use this when it's faster to render the component again than to compare the props
                                          // is it faster here? probably not, but it's a good example
                                          // refer to profiler tab in dev tools to see if it's worth it

export default TaskList;
//export { TaskListMem };