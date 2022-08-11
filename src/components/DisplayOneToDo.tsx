import { ToDoItemWithId } from "../utils/data-interfaces";

interface DisplayGetProps {
  toDo: ToDoItemWithId;
}

export function DisplayOneToDo(prop: DisplayGetProps): JSX.Element {
  return (
    <>
      <h2>{prop.toDo.title}</h2>
      <p>{prop.toDo.description}</p>
      {prop.toDo.completed === true && <h2>☑️</h2>}
      {prop.toDo.completed === false && <h2>☐</h2>}
    </>
  );
}
