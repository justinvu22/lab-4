function Task(props){
  return(
    <li>{props.description} <input type= "checkbox" checked = "false"/></li>
  );
}

function List(props) {
	return (
		<div>
			<h1>{ props.heading }</h1>
			<ul>
				<Task description = {props.tasks[0].description}/>
				<Task description = {props.tasks[1].description}/>
				<Task description = {props.tasks[2].description}/>
			</ul>
		</div>
	);
}

export default List;
