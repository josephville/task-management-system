import TaskForm from '../components/TaskForm';
import PropTypes from 'prop-types'; // Import PropTypes for props validation

const CreateTask = ({ fetchTasks }) => {
  return (
    <div>
      <h1>Create a New Task</h1>
      <TaskForm fetchTasks={fetchTasks}/>
    </div>
  );
}
CreateTask.propTypes = {
  fetchTasks: PropTypes.any,
};

export default CreateTask;

