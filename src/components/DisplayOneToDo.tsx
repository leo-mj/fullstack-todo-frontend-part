import { ToDoItemWithId } from "../utils/data-interfaces";
import { deleteToDos } from "../utils/deleteToDo";
import { putToDo } from "../utils/putToDo";

interface DisplayGetProps {
  toDo: ToDoItemWithId;
  currentToDoState: ToDoItemWithId | null;
  setToDo: React.Dispatch<React.SetStateAction<ToDoItemWithId | null>>;
}

export function DisplayOneToDo(prop: DisplayGetProps): JSX.Element {
  return (
    <>
      <h2 onClick={() => prop.setToDo(prop.toDo)}>{prop.toDo.title}</h2>
      {prop.currentToDoState !== null && (
        <button onClick={() => prop.setToDo(null)}>return to all to-dos</button>
      )}
      <p>{prop.toDo.description}</p>
      {prop.toDo.completed === true && (
        <h2 onClick={() => putToDo(prop.toDo, false)}>☑️</h2>
      )}
      {prop.toDo.completed === false && (
        <h2 onClick={() => putToDo(prop.toDo, true)}>☐</h2>
      )}
      <button
        onClick={() => {
          deleteToDos(prop.toDo);
          prop.setToDo(null);
        }}
      >
        Delete to-do
      </button>
    </>
  );
}
