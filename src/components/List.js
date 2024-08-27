function Task(props) {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={props.completed}
        onChange={() => props.onToggle(props.id)}
      />
      {props.description}
    </li>
  );
}

function List(props) {
  const handleToggle = (taskId) => {

    props.onTaskToggle(taskId);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        {props.tasks.map((task) =>
          <Task
            key={task.id}
            id={task.id}
            description={task.description}
            completed={task.completed}
            onToggle={handleToggle}
          />
        )}
      </ul>
    </div>
  );
}

export default List;
