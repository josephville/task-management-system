import PropTypes from 'prop-types';
import { useState } from 'react';

function TaskList({tasks}) { // the curly braces are used to destructure the props object
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            {incrementCounter}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {counter}<strong>{task.title}</strong>: {task.description} - Priority: {task.priority}
                    </li>
                ))}
            </ul>
        </div>
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

export default TaskList;