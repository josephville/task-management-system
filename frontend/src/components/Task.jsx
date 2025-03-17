import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Task = (props, {fetchTasks}) => {
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
            {/* <button>Reorder</button> */}
            <button type="delete" onClick={() => handleDelete(props.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <button><FontAwesomeIcon icon={faEdit} /></button>
            <strong>{props.title}</strong>: {props.description} - Priority: {props.priority}
        </>
    );
};
Task.propTypes = {
    id: PropTypes.string.isRequired,
    fetchTasks: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};

export default Task;